import Post from "./Post";

const PostList = ({ posts }) => {
  return posts.length === 0 ? (
    <p className="text-center fs-1"> No posts yet</p>
  ) : (
    <>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </>
  );
};

export default PostList;
