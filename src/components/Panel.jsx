import { useContext } from "react";
import { ThemeContext } from "../App";


export default function Panel({ title, children }) {
  
  const theme = useContext(ThemeContext);
  
  return (
    <section className={theme === "Dark" 
      ? "Container Theme-Light": "Container Theme-Dark"}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}