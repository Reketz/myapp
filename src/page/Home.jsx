import Card from "../components/Card";

export default function Home ({posts}) {

  return (<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
    <div className="row">
      {posts.map((post) => {
        return <Card {...post} />
      })}
    </div>
  </div>);

}