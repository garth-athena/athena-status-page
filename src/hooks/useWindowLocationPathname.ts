import {
    useContext,
} from "react";
import { WindowLocationPathnameContext } from "../contexts/WindowLocationPathnameContext";

export const useWindowLocationPathname = () => useContext(WindowLocationPathnameContext);