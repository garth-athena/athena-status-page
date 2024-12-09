import { ReactNode } from "react";

export const ExpandButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        appearance: "none",
        background: "none",
        boxSizing: "border-box",
        border: "none",
        display: "block",
        padding: 16,
        textAlign: "left",
        width: "100%",
      }}
      title={"Expand"}
    >
      {children}
    </button>
  );
};
