import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

/**
 * To avoid repeatedly importing and using useContext(ThemeContext) in components, we’ll create a custom hook called useTheme.
 * This hook will simplify consuming ThemeContext.
*/
export const useTheme = () => useContext(ThemeContext);
