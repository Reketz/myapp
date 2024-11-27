

export default function Panel({ title, children }) {

  return (
    <section className="Container">
      <h1>{title}</h1>
      {children}
    </section>
  )
}