import { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
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
