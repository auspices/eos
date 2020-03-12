import React, { useReducer, useCallback, useEffect } from "react";
import { Box } from "../Box";
import { PillStack } from "../PillStack";
import { KeyValueInput } from "../KeyValueInput";
import { KeyValueEditorRemove } from "./KeyValueEditorRemove";

export type KeyValueSchema = { key?: string; name: string; type: "string" }[];
export type KeyValueData = Record<string, string>;

export const toSchema = (data: KeyValueData): KeyValueSchema =>
  Object.keys(data).map(name => {
    const type = typeof data[name];

    if (type !== "string") {
      throw new Error("Schema invalid");
    }

    return { name, type };
  });

type State = {
  edited: Boolean;
  schema: KeyValueSchema;
  data: KeyValueData;
};

type Action =
  | { type: "ADD_FIELD"; payload: { name: string } }
  | { type: "REMOVE_FIELD"; payload: { name: string } }
  | {
      type: "UPDATE_NAME";
      payload: { oldName: string; newName: string; index: number };
    }
  | { type: "UPDATE_VALUE"; payload: { key: string; value: string } };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_FIELD": {
      if (state.schema.find(({ name }) => name === action.payload.name)) {
        return state;
      }

      return {
        ...state,
        edited: true,
        schema: [
          ...state.schema,
          {
            name: action.payload.name,
            type: "string"
          }
        ]
      };
    }
    case "REMOVE_FIELD": {
      const { [action.payload.name]: removed, ...nextData } = state.data;
      const nextSchema = state.schema.filter(
        ({ name }) => name !== action.payload.name
      );

      return {
        ...state,
        edited: true,
        schema: nextSchema,
        data: nextData
      };
    }
    case "UPDATE_NAME": {
      const { [action.payload.oldName]: removed, ...filteredData } = state.data;
      const nextData = {
        ...filteredData,
        ...(action.payload.newName !== ""
          ? { [action.payload.newName]: state.data[action.payload.oldName] }
          : {})
      };

      const nextSchema = state.schema
        .map((field, index) => {
          if (index !== action.payload.index) return field;

          return {
            key: field.key,
            name: action.payload.newName,
            type: field.type
          };
        })
        .filter(({ name }) => name !== "");

      return {
        ...state,
        edited: true,
        schema: nextSchema,
        data: nextData
      };
    }
    case "UPDATE_VALUE":
      return {
        ...state,
        edited: true,
        data: {
          ...state.data,
          [action.payload.key]: action.payload.value
        }
      };
  }
};

export type KeyValueEditorProps = {
  schema: KeyValueSchema;
  data: KeyValueData;
  onChange?(data: KeyValueData): void;
};

export const KeyValueEditor: React.FC<KeyValueEditorProps> = ({
  schema: initialSchema,
  data: initialData,
  onChange = () => {}
}) => {
  const [state, dispatch] = useReducer(reducer, {
    edited: false,
    schema: initialSchema.map(field => ({ key: field.name, ...field })),
    data: initialData
  });

  const handleNameChange = useCallback(
    ({ name: oldName, index }: { name: string; index: number }) => ({
      target: { value: newName }
    }: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: "UPDATE_NAME", payload: { oldName, newName, index } });
    },
    []
  );

  const handleValueChange = useCallback(
    (key: string) => ({
      target: { value }
    }: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: "UPDATE_VALUE", payload: { key, value } });
    },
    []
  );

  const handleAddField = useCallback(
    ({ target: { value: name } }: React.FocusEvent<HTMLInputElement>) => {
      if (name === "") return;

      dispatch({ type: "ADD_FIELD", payload: { name } });
    },
    []
  );

  const handleRemove = useCallback(
    (name: string) => () =>
      dispatch({ type: "REMOVE_FIELD", payload: { name } }),
    []
  );

  useEffect(() => onChange(state.data), [onChange, state.data]);

  return (
    <PillStack>
      {state.schema.map((field, index) => (
        <Box key={field.name + index} position="relative">
          <KeyValueInput
            k={{
              onChange: handleNameChange({ name: field.name, index }),
              placeholder: "name",
              defaultValue: field.name,
              autoComplete: "off"
            }}
            v={{
              onChange: handleValueChange(field.name),
              placeholder: field.name,
              defaultValue: state.data[field.name],
              autoComplete: "off",
              autoFocus: index === state.schema.length - 1
            }}
          />

          <KeyValueEditorRemove
            position="absolute"
            top={0}
            right={0}
            height="100%"
            onClick={handleRemove(field.name)}
          />
        </Box>
      ))}

      <KeyValueInput
        key={new Date().getTime()}
        k={{
          onBlur: handleAddField,
          placeholder: "add field",
          autoComplete: "off"
        }}
      />
    </PillStack>
  );
};

KeyValueEditor.displayName = "KeyValueEditor";
