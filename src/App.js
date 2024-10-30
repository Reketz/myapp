import { useState } from 'react';
import './App.css';
import Box from './components/Button';

const photo = {
  name: 'Homenaje a la Neurocirugía',
  artist: 'Marta Colvin Andrade',
  description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
  url: 'https://i.imgur.com/Mx7dA2Y.jpg',
  alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'  
}

function App() {

  const [input, setInput] = useState('');
  const [photoState, setPhotoState] = useState(photo);

  function handleUpdate() {
    setPhotoState({...photoState, novo: input});
  }

  function handleChange(event) {
    setInput(event.target.value);
  }


  return (
    <>
    <input type="text" name="text" value={input} onChange={handleChange} />
    <div style={{display: "flex", flexDirection: "column"}}>
      <span>{photoState.name}</span>
      <span>{photoState.artist}</span>
      <span>{photoState.description}</span>
      {photoState.novo && <span>{photoState.novo}</span>}
    </div>
    <button type="button" onClick={handleUpdate}>
      atualizar descrição
    </button>

  </>
  )
}

export default App;