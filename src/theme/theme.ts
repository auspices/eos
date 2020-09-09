export type Constants = {
  black: "black";
  white: "white";
};

export const CONSTANTS: Constants = {
  black: "black",
  white: "white",
};

export type ColorScheme = {
  primary: string;
  border: string;
  secondary: string;
  tertiary: string;
  hint: string;
  danger: string;
  background: string;
  accent: string;
  external: string;
} & Constants;

export const LIGHT: ColorScheme = {
  primary: "#000000",
  border: "#000000",
  secondary: "#7a7a7a",
  tertiary: "#bfbfbf",
  hint: "#e1e1e1",
  danger: "#db0000",
  background: "#ffffff",
  accent: "#6fdd00",
  external: "#0000d9",
  ...CONSTANTS,
};

export const DARK: ColorScheme = {
  primary: "#ffffff",
  border: "#ffffff",
  secondary: "#a0a0a0",
  tertiary: "#6c6c6c",
  hint: "#3f3f3f",
  danger: "#ff3e3e",
  background: "#000000",
  accent: "#23cf00",
  external: "#1c8bf2",
  ...CONSTANTS,
};

export const SCHEMES = {
  dark: DARK,
  light: LIGHT,
};

export type Scheme = keyof typeof SCHEMES;

export const SPACE_SCALE = [
  "0", // 0
  "0.125rem", // 1
  "0.25rem", // 2
  "0.5rem", // 3
  "0.75rem", // 4
  "1rem", // 5
  "1.5rem", // 6
  "2rem", // 7
  "4rem", // 8
  "8rem", // 9
  "16rem", // 10
] as const;

export const SPACE_SCALE_UNIT = "rem";

export const FONT_SCALE = [
  "0.75rem", // 0 = 12px
  "0.875rem", // 1 = 14px
  "1rem", // 2 = 16px (base)
  "1.125rem", // 3 = 18px
] as const;

export const ROOT_FONT_SIZE = "16px";
export const BASE_FONT_SIZE = FONT_SCALE[2];
export const FONT_SCALE_UNIT = "rem";

export const THEME = {
  fonts: {
    body:
      'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    mono: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  },
  scheme: "light",
  colors: LIGHT,
  fontSizes: FONT_SCALE,
  lineHeights: [1, 1.25, 1.33, 1.75],
  space: SPACE_SCALE,
  breakpoints: ["24rem", "50rem", "64rem"],
};

export type Theme = typeof THEME;
