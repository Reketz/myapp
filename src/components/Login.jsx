export default function Login({name, info}) {
  return (<div className="Container">
    <span>
      Acesso restrito. Você está logado como {name}!
    </span>
    <span>
      {info}
    </span>
  </div>)
}