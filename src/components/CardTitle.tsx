import { ReactNode } from "react";

export const CardTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h2
      style={{
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 1,
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
