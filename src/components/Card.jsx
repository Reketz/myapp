export default function Card(post) {
  return (<div 
    key={post.id} 
    className="col s12 m3 card blue-grey darken-1"
    style={{height: "200px", margin: "20px"}}>
    <div className="card-content white-text">
      <span className="card-title">{post.title}</span>
      <p>{post.body}</p>
    </div>
  </div>);
}