import "./Navbar.styles.css";
import SearchIcon from "@mui/icons-material/Search";
import Person from "@mui/icons-material/Person";
import Chat from "@mui/icons-material/Chat";
import Notifications from "@mui/icons-material/Notifications";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user } = useContext(AuthContext);

  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="navbarLogo">CelebritySocial</span>
        </Link>
      </div>
      <div className="navbarMiddle">
        <div className="navbarSearch">
          <SearchIcon className="navbarSearchIcon" />
          <input
            placeholder="Search for friends posts or videos"
            className="navbarSearchInput"
          />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <span className="navbarLink">Home</span>
          <span className="navbarLink">Feed</span>
        </div>
        <div className="navbarIcons">
          <div className="navbarIcon">
            <Person />
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbarIcon">
            <Chat />
            <span className="navbarIconBadge">3</span>
          </div>
          <div className="navbarIcon">
            <Notifications />
            <span className="navbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            alt="profile"
            src={
              user.profilePicture
                ? PublicFolder + user.profilePicture
                : PublicFolder + "assets/posts/noAvatar.png"
            }
            className="profilePictureIcon"
          />
        </Link>
      </div>
    </div>
  );
}
