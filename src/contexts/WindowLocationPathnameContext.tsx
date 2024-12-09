import { createContext, ReactNode, useEffect, useState } from "react";
export const WindowLocationPathnameContext = createContext<any>(null);

export const WindowLocationPathnameContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [locationPathname, setLocationPathname] = useState<string>(
    window.location.pathname
  );
  useEffect(() => {
    const handlePushState = () => {
      setLocationPathname(window.location.pathname);
    };
    window.addEventListener("popstate", handlePushState);
    return () => {
      window.removeEventListener("popstate", handlePushState);
    };
  }, []);
  return (
    <WindowLocationPathnameContext.Provider
      value={{ locationPathname, setLocationPathname }}
    >
      {children}
    </WindowLocationPathnameContext.Provider>
  );
};