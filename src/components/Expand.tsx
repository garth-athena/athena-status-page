import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

export const Expand = ({
  children,
  duration = 200,
  expand,
}: {
  children: ReactNode;
  duration?: number;
  expand: boolean;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(expand ? "unset" : 0);
  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
    }
    const handleResize = () => {
      if (ref.current) {
        setHeight(ref.current.clientHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setHeight]);
  const transitionHeight = {
    transition: `max-height ${duration}ms ease-in-out ${
      expand ? 0 : duration
    }ms`,
  };
  const expandStyles: CSSProperties = {
    transition: `opacity ${duration}ms ease-in-out ${expand ? duration : 0}ms`,
  };
  return (
    <div
      style={{
        maxHeight: expand ? height : 0,
        overflow: expand ? "visible" : "hidden",
        ...transitionHeight,
      }}
    >
      <div style={{ opacity: expand ? 1 : 0, ...expandStyles }}>
        <div ref={ref}>{children}</div>
      </div>
    </div>
  );
};
