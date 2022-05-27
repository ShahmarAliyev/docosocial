import "./Online.styles.css";
export default function Online({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImageContainer">
        <img
          className="rightbarProfileImage"
          alt=""
          src={user.profilePicture}
        />
        <span className="rightbarOnline"> </span>
      </div>
      <span className="rightbarUserName"> {user.username}</span>
    </li>
  );
}
