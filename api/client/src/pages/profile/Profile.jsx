import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./Profile.styles.css";

export default function Profile() {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `https://celebritysocial.herokuapp.com/api/users?username=${username}`
      );
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Navbar />
      <div className="profile">
        <Leftbar />

        <div className="profileRight">
          <div className="profileRightTop">
            {user && (
              <div className="profileCover">
                <img
                  alt="cover"
                  src={
                    user.profilePicture
                      ? PublicFolder + user.profilePicture
                      : PublicFolder + "posts/noCover.png"
                  }
                  className="profileCoverImage"
                />
                <img
                  alt="profile"
                  src={
                    user.profilePicture
                      ? PublicFolder + user.profilePicture
                      : PublicFolder + "posts/noAvatar.png"
                  }
                  className="profileProfileImage"
                />
              </div>
            )}
            <div className="profileInfo">
              <h4 className="profileInfoName"> {user.username}</h4>
              <span className="profileInfoDetails">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
