import "./Feed.styles.css";
import Share from "./share/Share";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedContainer">
        <Share />
      </div>
    </div>
  );
}
