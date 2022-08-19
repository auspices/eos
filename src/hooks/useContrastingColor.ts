import { useTheme } from "styled-components";
import { ColorScheme, getContrastTIQHex } from "../theme";

export const useContrastingColor = (keyOrHex: keyof ColorScheme | string) => {
  const { colors } = useTheme();

  const color = colors[keyOrHex as keyof ColorScheme] || keyOrHex;

  return getContrastTIQHex(color);
};
