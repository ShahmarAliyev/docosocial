import "./Online.styles.css";

import { Link } from "react-router-dom";

export default function Online({ user }) {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImageContainer">
        <Link to={`/profile/${user.username}`}>
          <img
            className="rightbarProfileImage"
            alt=""
            src={PublicFolder + user.profilePicture}
          />
        </Link>
        <span className="rightbarOnline"> </span>
      </div>
      <span className="rightbarUserName"> {user.username}</span>
    </li>
  );
}
