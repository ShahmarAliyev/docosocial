import axios from "axios";
import { useEffect, useState } from "react";
import "./Feed.styles.css";
import Post from "./post/Post";
import Share from "./share/Share";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("/posts/timeline/62899e533322d995ba8bdd00");
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedContainer">
        <Share />
        {posts &&
          posts.map((post) => {
            console.log(post);
            return <Post key={post._id} post={post} />;
          })}
      </div>
    </div>
  );
}
