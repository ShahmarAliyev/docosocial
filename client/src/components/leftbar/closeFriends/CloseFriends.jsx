import "./CloseFriends.styles.css";

export default function CloseFriends({ user }) {
  return (
    <li key={user.id} className="leftbarFriend">
      <img
        className="leftbarFriendPicture"
        src={user.profilePicture}
        alt="friends profile pictures"
      />
      <span className="leftbarFriendName"> {user.username}</span>
    </li>
  );
}
