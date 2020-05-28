import { themeGet } from "@styled-system/theme-get";

export const hexAlpha = (color: string, opacity: number) => {
  const clampedOpacity = Math.round(
    Math.min(Math.max(opacity || 1, 0), 1) * 255
  );

  return color + clampedOpacity.toString(16).toUpperCase();
};

export const themeGetHexAlpha = (path: string, opacity: number) => (
  props: any
) => hexAlpha(themeGet(path)(props), opacity);

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

export const getContrastTIQHex = (value: string) => {
  return getContrastYIQRGB({ ...hexToRgb(value) });
};

export const colorHash = (string: string) => {
  let code = 0;
  for (var i = 0; i < string.length; i++) {
    code = string.charCodeAt(i) + ((code << 5) - code);
  }
  const c = (code & 0x00ffffff).toString(16).toUpperCase();
  const hex = "00000".substring(0, 6 - c.length) + c;
  return `#${hex}`;
};

// function intToRGB(i){
//   var c = (i & 0x00FFFFFF)
//       .toString(16)
//       .toUpperCase();

//   return "00000".substring(0, 6 - c.length) + c;
// }
