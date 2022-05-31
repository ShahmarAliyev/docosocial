import "./Rightbar.css";
import { Users } from "../../data";
import Online from "./online/Online";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Rightbar({ user }) {
  const { user: currentUser } = useContext(AuthContext);

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImage" alt="gift" src="assets/gift.png" />
          <span className="birthdayText">
            <b> Kobe Bryant </b>and <b> Lebron James </b>have a birthday today.
          </span>
        </div>

        <img className="rightbarAd" alt="" src="/assets/ad.jpg" />

        <h4 className="rightbarTitle"> Online Friends</h4>

        <ul className="rightbarFriendList">
          {Users.map((user) => {
            return <Online key={user.id} user={user} />;
          })}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{currentUser.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{currentUser.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Married</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {currentUser.followers.map((follower) => {
            return (
              <div key={follower} className="rightbarFollowing">
                <img
                  src={PublicFolder + currentUser.profilePicture}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">
                  {currentUser.username}
                </span>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
