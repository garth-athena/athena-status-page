import { useState, useEffect } from "react";

export const ModeButton = () => {
  const [mode, setMode] = useState<"light" | "dark">(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDarkMode ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background-color",
      mode === "light" ? "#ffffff" : "#000000"
    );
    document.documentElement.style.setProperty(
      "--color",
      mode === "light" ? "#000000" : "#ffffff"
    );
  }, [mode]);

  const handleClick = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={handleClick}
      style={{
        appearance: "none",
        backgroundColor: "transparent",
        border: "none",
        color: "inherit",
        display: "inline",
        fontFamily: "inherit",
        fontSize: 16,
        padding: 0,
      }}
    >
      {mode === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};
