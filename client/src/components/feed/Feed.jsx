import "./Feed.styles.css";
import Post from "./post/Post";
import Share from "./share/Share";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedContainer">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
