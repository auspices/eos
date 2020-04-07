export const hexAlpha = (color: string, opacity: number) => {
  const clampedOpacity = Math.round(
    Math.min(Math.max(opacity || 1, 0), 1) * 255
  );

  return color + clampedOpacity.toString(16).toUpperCase();
};
