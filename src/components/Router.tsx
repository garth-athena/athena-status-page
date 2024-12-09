import { ReactNode } from "react";
import { useGoToHash } from "../hooks/useGoToHash";
import { useWindowLocationHash } from "../hooks/useWindowLocationHash";

export const Router = ({
  children,
}: {
  children: { [key: string]: ReactNode };
}) => {
  const goToHash = useGoToHash();
  const { locationHash } = useWindowLocationHash();
  if (window.location.hash === "") {
    goToHash("#/");
  } else if (!children[locationHash]) {
    goToHash("#/not-found/");
  }
  return <>{children[locationHash]}</>;
};
