import "./Navbar.styles.css";
import SearchIcon from "@mui/icons-material/Search";
import Person from "@mui/icons-material/Person";
import Chat from "@mui/icons-material/Chat";
import Notifications from "@mui/icons-material/Notifications";

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <span className="navbarLogo">CelebritySocial</span>
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

        <img
          alt="profile"
          src="/assets/profile.jpg"
          className="profilePictureIcon"
        />
      </div>
    </div>
  );
}
