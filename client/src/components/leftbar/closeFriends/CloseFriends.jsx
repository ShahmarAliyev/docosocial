import "./CloseFriends.styles.css";

export default function CloseFriends({ user }) {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li key={user.id} className="leftbarFriend">
      <img
        className="leftbarFriendPicture"
        src={PublicFolder + user.profilePicture}
        alt="friends profile pictures"
      />
      <span className="leftbarFriendName"> {user.username}</span>
    </li>
  );
}
