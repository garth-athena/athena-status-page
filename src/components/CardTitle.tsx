import { ReactNode } from "react";

export const CardTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h2
      style={{
        marginBottom: 8,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
      }}
    >
      {children}
    </h2>
  );
};
