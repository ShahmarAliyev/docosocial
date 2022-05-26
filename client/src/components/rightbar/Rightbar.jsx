import "./Rightbar.css";
import { Users } from "../../data";
import Online from "./online/Online";
export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarContainer">
        <div className="birthdayContainer">
          <img className="birthdayImage" alt="gift" src="assets/gift.png" />
          <span className="birthdayText">
            <b> Kobe Bryant </b>and <b> Lebron James </b>have a birthday today.
          </span>
        </div>

        <img className="rightbarAd" alt="" src="/assets/ad.jpg" />

        <h4 className="rightbarTitle"> Online Friends</h4>

        <ul className="rightbarFriendList">
          {Users.map((user) => {
            return <Online key={user.id} user={user} />;
          })}
        </ul>
      </div>
    </div>
  );
}
