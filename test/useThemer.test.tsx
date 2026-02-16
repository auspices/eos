import React from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider, useTheme } from "styled-components";
import { renderToString } from "react-dom/server";
import { hydrateRoot } from "react-dom/client";
import { act } from "react";
import { ThemerProvider, useThemer } from "../src/Themer/useThemer";
import type { Scheme } from "../src/theme";

const ThemedBridge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useThemer();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const ThemeProbe: React.FC = () => {
  const { scheme, toggleScheme } = useThemer();
  const theme = useTheme() as { scheme: Scheme; colors: { background: string } };

  return (
    <>
      <div data-testid="scheme">{scheme}</div>
      <div data-testid="theme-scheme">{theme.scheme}</div>
      <div data-testid="background">{theme.colors.background}</div>
      <button type="button" onClick={toggleScheme}>
        toggle
      </button>
    </>
  );
};

describe("ThemerProvider", () => {
  it("uses controlled scheme on initial render and never touches backend", () => {
    const setScheme = vi.fn();
    const backend = {
      get: vi.fn(() => "light" as Scheme),
      set: vi.fn(),
    };

    render(
      <ThemerProvider scheme="dark" setScheme={setScheme} backend={backend}>
        <ThemedBridge>
          <ThemeProbe />
        </ThemedBridge>
      </ThemerProvider>
    );

    expect(screen.getByTestId("scheme")).toHaveTextContent("dark");
    expect(screen.getByTestId("theme-scheme")).toHaveTextContent("dark");
    expect(screen.getByTestId("background")).toHaveTextContent("#000000");
    expect(backend.get).not.toHaveBeenCalled();
    expect(backend.set).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole("button", { name: "toggle" }));
    expect(setScheme).toHaveBeenCalledWith("light");
    expect(backend.set).not.toHaveBeenCalled();
  });

  it("reads backend on first render in uncontrolled mode and persists updates", () => {
    const backend = {
      get: vi.fn(() => "dark" as Scheme),
      set: vi.fn(),
    };

    render(
      <ThemerProvider initialScheme="light" backend={backend}>
        <ThemedBridge>
          <ThemeProbe />
        </ThemedBridge>
      </ThemerProvider>
    );

    expect(screen.getByTestId("scheme")).toHaveTextContent("dark");
    expect(screen.getByTestId("theme-scheme")).toHaveTextContent("dark");
    expect(screen.getByTestId("background")).toHaveTextContent("#000000");
    expect(backend.get).toHaveBeenCalledTimes(1);
    expect(backend.set).toHaveBeenCalledWith("dark");

    fireEvent.click(screen.getByRole("button", { name: "toggle" }));
    expect(screen.getByTestId("scheme")).toHaveTextContent("light");
    expect(screen.getByTestId("theme-scheme")).toHaveTextContent("light");
    expect(backend.set).toHaveBeenLastCalledWith("light");
  });

  it("hydrates without mismatch warnings in controlled mode", async () => {
    const backend = {
      get: vi.fn(() => "light" as Scheme),
      set: vi.fn(),
    };

    const tree = (
      <ThemerProvider scheme="dark" setScheme={vi.fn()} backend={backend}>
        <ThemedBridge>
          <ThemeProbe />
        </ThemedBridge>
      </ThemerProvider>
    );

    const html = renderToString(tree);
    const container = document.createElement("div");
    container.innerHTML = html;
    document.body.appendChild(container);

    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    await act(async () => {
      hydrateRoot(container, tree);
      await Promise.resolve();
    });

    expect(consoleErrorSpy).not.toHaveBeenCalled();
    expect(screen.getByTestId("scheme")).toHaveTextContent("dark");
    expect(screen.getByTestId("theme-scheme")).toHaveTextContent("dark");
    expect(backend.get).not.toHaveBeenCalled();
    expect(backend.set).not.toHaveBeenCalled();

    consoleErrorSpy.mockRestore();
    container.remove();
  });
});
