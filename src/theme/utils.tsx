import { themeGet } from "@styled-system/theme-get";
import { ColorScheme, SPACE_SCALE } from "./theme";

export const color = (name: keyof ColorScheme, opacity?: number) => {
  return (props: any) => {
    const value = themeGet(`colors.${name}`)(props);
    if (opacity === undefined) return value;
    const { r, g, b } = hexToRgb(value);
    return `rgba(${[r, g, b].join(",")}, ${opacity})`;
  };
};

export const hexAlpha = (color: string, opacity: number) => {
  const clampedOpacity = Math.round(
    Math.min(Math.max(opacity || 1, 0), 1) * 255
  );
  return color + clampedOpacity.toString(16).toUpperCase();
};

export const componentToHex = (value: number) => {
  const hex = value.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

export const rgbToHex = (r: number, g: number, b: number) => {
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
};

export const hexToRgb = (value: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);

  if (!result) {
    throw new Error(`Invalid input ${value}`);
  }

  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
};

export const getContrastYIQRGB = ({
  r,
  g,
  b,
  a,
}: {
  r: number;
  g: number;
  b: number;
  a?: number;
}) => {
  if (a === 0) return "black";
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
};

export const getContrastYIQHex = (value: string) => {
  return getContrastYIQRGB({ ...hexToRgb(value) });
};

// Backwards-compatible alias kept for existing consumers.
export const getContrastTIQHex = getContrastYIQHex;

export const colorHash = (string: string) => {
  let code = 0;
  for (let i = 0; i < string.length; i++) {
    code = string.charCodeAt(i) + ((code << 5) - code);
  }
  const c = (code & 0x00ffffff).toString(16).toUpperCase();
  const hex = "00000".substring(0, 6 - c.length) + c;
  return `#${hex}`;
};

export const space = (index: number) => {
  return SPACE_SCALE[index];
};
