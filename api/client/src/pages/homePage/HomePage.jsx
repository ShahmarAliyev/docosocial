import "./HomePage.styles.css";
import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <div className="homepageContainer">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
