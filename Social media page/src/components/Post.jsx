const Post = ({ post }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={post.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.content}</p>
      </div>
    </div>
  );
};

export default Post;
