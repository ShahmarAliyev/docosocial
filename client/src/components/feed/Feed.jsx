import "./Feed.styles.css";
import Post from "./post/Post";
import Share from "./share/Share";
import { Posts } from "../../data";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedContainer">
        <Share />
        {Posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}
