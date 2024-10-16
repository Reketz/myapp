export default function Login({children, name}) {
  return (<div className="Container">
    <span>{name}</span>
    {children}
  </div>)
}