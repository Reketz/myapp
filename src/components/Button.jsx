import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Button({ children, onClick }) {

  const theme = useContext(ThemeContext);

  return (
    <button className={theme === "Light" 
      ? "Button-Light" 
      : "Button-Dark"} onClick={onClick}>
      {children}
    </button>
  );
}