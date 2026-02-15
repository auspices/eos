import type { Metadata } from "next";
import StyledRegistry from "../lib/styled-registry";
import { THEME } from "@auspices/eos/server";

export const metadata: Metadata = {
  title: "EOS Next Minimal",
  description: "Validation app for @auspices/eos server/client entrypoints",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body data-root-font-size={THEME.rootFontSize}>
        <StyledRegistry>{children}</StyledRegistry>
      </body>
    </html>
  );
}
