import { CSSProperties } from "react";

export const cross =
  "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z";
export const down = "m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z";
export const hash =
  "M20 10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4zm-6 4h-4v-4h4z";
export const lunch = "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z";
export const star =
  "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";
export const warn = "M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z";
export const expandCircle =
  "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 13.5L7.5 11l1.42-1.41L12 12.67l3.08-3.08L16.5 11z";
export const contrast =
  "M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10m1-17.93c3.94.49 7 3.85 7 7.93s-3.05 7.44-7 7.93z";

export const Icon = ({ d, style }: { d: string; style: CSSProperties }) => {
  const icon: CSSProperties = { display: "block", ...style };
  return (
    <svg
      aria-hidden="true"
      fill="var(--color)"
      focusable="false"
      style={icon}
      viewBox="0 0 24 24"
    >
      <path d={d}></path>
    </svg>
  );
};
