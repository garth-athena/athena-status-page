import { createContext, ReactNode, useEffect, useState } from "react";
export const WindowLocationHashContext = createContext<any>(null);

export const WindowLocationHashContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [locationHash, setLocationHash] = useState<string>(
    window.location.hash
  );
  useEffect(() => {
    const handlePushState = () => {
      setLocationHash(window.location.hash);
    };
    window.addEventListener("popstate", handlePushState);
    return () => {
      window.removeEventListener("popstate", handlePushState);
    };
  }, []);
  return (
    <WindowLocationHashContext.Provider
      value={{ locationHash, setLocationHash }}
    >
      {children}
    </WindowLocationHashContext.Provider>
  );
};
