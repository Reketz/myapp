import { useState } from 'react';  
import './App.css';
import Login from './page/Login';
import Button from './components/Button';

function App() {
  //create context
  //provider
  //useContext
  const [theme, setTheme] = useState('Dark');

  return (
    <>
      <Login />
      <Button onClick={() => {
        setTheme(theme === 'Dark' ? 'Light' : 'Dark');
      }}>
        Toggle theme
      </Button>
    </>
  )
}

export default App;