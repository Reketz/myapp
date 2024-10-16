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
    console.log(user);
    
    return hasPermission 
      && <Login {...user} />;
  }

  return (
    <div>
      Login normal
    </div>

  );
}

export default App;