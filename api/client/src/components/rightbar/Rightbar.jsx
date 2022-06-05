import "./Rightbar.css";
import { Users } from "../../data";
import Online from "./online/Online";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export default function Rightbar({ user }) {
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendsList = await axios.get(
          "/users/friends/" + currentUser?._id
        );
        setFriends(friendsList.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getFriends();
  }, [currentUser]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(
          `https://celebritysocial.herokuapp.com/api/${user._id}/unfollow`,
          {
            userId: currentUser._id,
          }
        );
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(
          `https://celebritysocial.herokuapp.com/api/${user._id}/follow`,
          {
            userId: currentUser._id,
          }
        );
        dispatch({ type: "FOLLOW", payload: user._id });
      }
    } catch (error) {
      console.log(error);
    }
    setFollowed(!followed);
  };

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
          {Users.map((u) => {
            return <Online key={u.id} user={u} />;
          })}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
      <>
        {user.username !== currentUser.username && (
          <button onClick={handleClick} className="rightbarFollowButton">
            {followed ? "Unfollow" : "Follow"}
            {followed ? <RemoveIcon /> : <AddIcon />}
          </button>
        )}

        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 1
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        {friends.length > 0 && (
          <div className="rightbarFollowings">
            {friends.map((friend) => {
              return (
                friend && (
                  <Link
                    to={"/profile/" + friend.username}
                    style={{ textDecoration: "none" }}
                    key={friend._id}
                  >
                    <div className="rightbarFollowing">
                      <img
                        src={
                          friend.profilePicture
                            ? PublicFolder + friend.profilePicture
                            : PublicFolder + "posts/noAvatar.png"
                        }
                        alt=""
                        className="rightbarFollowingImg"
                      />
                      <span className="rightbarFollowingName">
                        {friend.username}
                      </span>
                    </div>
                  </Link>
                )
              );
            })}
          </div>
        )}
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
