import Login from "./components/Login";
import './App.css';

const user = {
  name: "admin",
  password: 123321,
  info: "Usuário desde de: 10/09/2010"
}

const hasPermission = true;

function App() {

  if (user.name === "admin") {
    return hasPermission 
      && <Login name={user.name}>
          <h3>Bem vindo</h3>
          <div>
            Olá, Usuário
          </div>
          <span>O que você deseja acessar?</span>
        </Login>;
  }

  return (
    <div>
      <span>
        Login normal
      </span>
    </div>

  );
}

export default App;