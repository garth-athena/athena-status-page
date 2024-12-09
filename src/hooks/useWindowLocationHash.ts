import { useContext } from "react";
import { WindowLocationHashContext } from "../contexts/WindowLocationHashContext";

export const useWindowLocationHash = () =>
  useContext(WindowLocationHashContext);
