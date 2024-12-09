import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, deletePost } from "./posts/Postsslice";

const UserTable = () => {
  const dispatch = useDispatch();
  const { posts, error, status } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === "idle") dispatch(fetchPosts());
  }, [status, dispatch]);

  if (error) return <div style={{ color: "red" }}>Error : {error} </div>;

  return (
    <div>
      <h2>Posts </h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts?.length > 0 &&
            posts.map((post) => {
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>Edit</td>
                <td onClick={() => dispatch(deletePost(id))}>Delete</td>
              </tr>;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
