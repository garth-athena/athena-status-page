import { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        borderRadius: 4,
        borderStyle: "solid",
        padding: 16,
        position: "relative",
      }}
    >
      {children}
    </div>
  );
};
