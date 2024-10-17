import Login from "./components/Login";
import './App.css';

const movies = [
  {id: 1, name: "Os vingadores"},
  {id: 2, name: "Mundo perdido"},
  {id: 3, name: "A volta dos que não foram"},
  {id: 5, name: "Poeira em alto mar"},
  {id: 6, name: "Fagmentado"},
  {id: 7, name: "Arquivo do sétimo dia"}
]

function App() {
  return <div>
    <ul>
      {
        movies.map((movie) => <li key={movie.id}>{movie.name}</li>)
      }
    </ul>
  </div>
}

export default App;