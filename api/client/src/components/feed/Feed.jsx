import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Feed.styles.css";
import Post from "./post/Post";
import Share from "./share/Share";

export default function Feed({ username }) {
  const { user } = useContext(AuthContext);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(
            "https://celebritysocial.herokuapp.com/api/posts/profile/" +
              username
          )
        : await axios.get(
            "https://celebritysocial.herokuapp.com/api/posts/timeline/" +
              user._id
          );
      setPosts();
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="feed">
      <div className="feedContainer">
        {(!username || username === user.username) && <Share />}
        {posts &&
          posts.map((post) => {
            return <Post key={post._id} post={post} />;
          })}
      </div>
    </div>
  );
}
