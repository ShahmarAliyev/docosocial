import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./Profile.styles.css";

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="profile">
        <Leftbar />

        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                alt="cover"
                src="assets/cover.jpg"
                className="profileCoverImage"
              />
              <img
                alt="profile"
                src="assets/profiles/profile.jpg"
                className="profileProfileImage"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Shahmar Aliyev</h4>
              <span className="profileInfoDetails"> I am new</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
