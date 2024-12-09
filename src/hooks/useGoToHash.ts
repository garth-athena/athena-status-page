import { MouseEvent, TouchEvent } from "react";
import { useWindowLocationHash } from "./useWindowLocationHash";

export const useGoToHash = () => {
  const { setLocationHash } = useWindowLocationHash();

  const goToHash = (argument: string | MouseEvent | TouchEvent) => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    window.focus();
    if (typeof argument === "string") {
      window.history.pushState({}, "", argument);
      setLocationHash(argument);
      return;
    }
    const element = argument.target as HTMLAnchorElement;
    if (element.tagName === "A") {
      argument.preventDefault();
      const hash = element.getAttribute("href");
      window.history.pushState({}, "", hash);
      setLocationHash(hash);
      return;
    }
    return;
  };
  return goToHash;
};
