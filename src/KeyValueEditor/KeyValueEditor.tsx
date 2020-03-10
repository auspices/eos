import React, { useReducer, useCallback, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import { omit } from "../lib/omit";
import { PillStack } from "../PillStack";
import { KeyValueInput } from "../KeyValueInput";

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
  | {
      type: "UPDATE_NAME";
      payload: { oldName: string; newName: string; index: number };
    }
  | { type: "UPDATE_VALUE"; payload: { key: string; value: string } };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_FIELD":
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
    case "UPDATE_NAME":
      return {
        ...state,
        edited: true,
        schema: state.schema.map((field, index) => {
          if (index !== action.payload.index) return field;

          return {
            key: field.key,
            name: action.payload.newName,
            type: field.type
          };
        }),
        data: {
          ...omit(state.data, action.payload.oldName),
          [action.payload.newName]: state.data[action.payload.oldName]
        }
      };
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
  autoSaveWait?: number;
  onChange?(data: KeyValueData): void;
  onSave?(data: KeyValueData): void;
};

export const KeyValueEditor: React.FC<KeyValueEditorProps> = ({
  schema: initialSchema,
  data: initialData,
  onChange = () => {},
  onSave = () => {},
  autoSaveWait = 500
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

  const [handleSave] = useDebouncedCallback(
    () => state.edited && onSave(state.data),
    autoSaveWait
  );

  useEffect(() => {
    onChange(state.data);
    handleSave();
  }, [handleSave, onChange, state.data]);

  return (
    <PillStack>
      {state.schema.map((field, index) => (
        <KeyValueInput
          key={`kv:${index}`}
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
