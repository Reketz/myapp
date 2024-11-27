import Card from "../components/Card";

export default function Home ({posts}) {

  return (
  <div >
    <button onClick={() => alert('Clicou')}>Menu</button>
    <div>
      {posts.map((post) => {
        return <p key={post.id}>{post.title}</p>
      })}
    </div>
  </div>);

}