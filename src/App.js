import { createContext, useState } from 'react';  
import './App.css';
import Login from './page/Login';
import Button from './components/Button';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('Dark');

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Login />  
      </ThemeContext.Provider>
      <Button onClick={() => {
        setTheme(theme === 'Dark' ? 'Light' : 'Dark');
      }} />
    </>
  );
}
