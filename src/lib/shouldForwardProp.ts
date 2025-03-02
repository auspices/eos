import baseShouldForwardProp from "@styled-system/should-forward-prop";

const CUSTOM_PROPS = [
  "textColor",
  "focus",
  "hover",
  "selected",
  "highlighted",
  "active",
  "disabled",
];

export const shouldForwardProp = (prop: string): boolean => {
  return baseShouldForwardProp(prop) && !CUSTOM_PROPS.includes(prop);
};
