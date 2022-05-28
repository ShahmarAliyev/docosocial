import "./Online.styles.css";
export default function Online({ user }) {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImageContainer">
        <img
          className="rightbarProfileImage"
          alt=""
          src={PublicFolder + user.profilePicture}
        />
        <span className="rightbarOnline"> </span>
      </div>
      <span className="rightbarUserName"> {user.username}</span>
    </li>
  );
}
