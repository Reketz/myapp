import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  
  return <div className='Container'>
    {count}
    <button 
      className='Button' 
      onClick={() => setCount(count + 1)} 
      >+</button>
  </div>
}

export default App;