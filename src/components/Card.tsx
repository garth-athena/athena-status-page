import { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        borderColor: "rgba(127.5, 127.5, 127.5, 0.5)",
        borderRadius: 4,
        borderStyle: "solid",
        padding: 0,
        position: "relative",
      }}
    >
      {children}
    </div>
  );
};
