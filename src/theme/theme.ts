export const THEME = {
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
    mono: "Menlo, monospace"
  },
  fontSizes: [
    "0.75rem", // 0 = 12px
    "0.875rem", // 1 = 14px
    "1rem", // 2 = 16px (base)
    "1.125rem", // 3 = 18px
    "1.5rem", // 4 = 24px
    "2rem", // 5 = 32px
    "3rem", // 6 = 48px
    "4rem", // 7 = 64px
    "4.5rem" // 8 = 72px
  ],
  lineHeights: [1, 1.25, 1.33, 1.75],
  space: [
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
    "16rem" // 10
  ],
  breakpoints: ["20rem", "50rem", "64rem"]
};

export type Theme = typeof THEME;
