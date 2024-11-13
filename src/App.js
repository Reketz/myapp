import { useEffect, useState } from 'react';  
import './App.css';
import Home from './page/Home';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      console.log('Esperando...');

      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro ao buscar: ${response.status}`);
        }

        response.json().then((jsonFormatado) => {
          console.log(jsonFormatado);
          setPosts(jsonFormatado);
        })
      })
    }, 2000);
    
  }, []);

  if(!posts || posts.length === 0) {
    return <h2>Not found!</h2>
  }

  return (
    <>
      <Home posts={posts} />
    </>
  )
}

export default App;