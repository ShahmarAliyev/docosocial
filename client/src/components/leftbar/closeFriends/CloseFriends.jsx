import React from "react";

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
