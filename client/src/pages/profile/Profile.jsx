import axios from "axios";
import { useContext, useEffect, useState } from "react";
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
      const res = await axios.get(`/users?username=${username}`);
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
            <div className="profileCover">
              <img
                alt="cover"
                src={PublicFolder + user?.coverPicture}
                className="profileCoverImage"
              />
              <img
                alt="profile"
                src={PublicFolder + user?.profilePicture}
                className="profileProfileImage"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Shahmar Aliyev</h4>
              <span className="profileInfoDetails"> I am new</span>
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
