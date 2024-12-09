import { MouseEvent, TouchEvent } from "react";
import { useWindowLocationPathname } from "./useWindowLocationPathname";

export const useGoToPathname = () => {
  const { setLocationPathname } = useWindowLocationPathname();

  const goToPathname = (argument: string | MouseEvent | TouchEvent) => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    window.focus();
    if (typeof argument === "string") {
      window.history.pushState({}, "", argument);
      setLocationPathname(argument);
      return;
    }
    const element = argument.target as HTMLAnchorElement;
    if (element.tagName === "A") {
      argument.preventDefault();
      const pathname = element.getAttribute("href");
      window.history.pushState({}, "", pathname);
      setLocationPathname(pathname);
      return;
    }
    return;
  };
  return goToPathname;
};