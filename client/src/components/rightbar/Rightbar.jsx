import "./Rightbar.css";

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
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img
                className="rightbarProfileImage"
                alt=""
                src="/assets/curry.jpg"
              />
              <span className="rightbarOnline"> </span>
            </div>
            <span className="rightbarUserName"> Stepen Curry</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img
                className="rightbarProfileImage"
                alt=""
                src="/assets/curry.jpg"
              />
              <span className="rightbarOnline"> </span>
            </div>
            <span className="rightbarUserName"> Stepen Curry</span>
          </li>{" "}
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img
                className="rightbarProfileImage"
                alt=""
                src="/assets/curry.jpg"
              />
              <span className="rightbarOnline"> </span>
            </div>
            <span className="rightbarUserName"> Stepen Curry</span>
          </li>{" "}
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img
                className="rightbarProfileImage"
                alt=""
                src="/assets/curry.jpg"
              />
              <span className="rightbarOnline"> </span>
            </div>
            <span className="rightbarUserName"> Stepen Curry</span>
          </li>{" "}
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img
                className="rightbarProfileImage"
                alt=""
                src="/assets/curry.jpg"
              />
              <span className="rightbarOnline"> </span>
            </div>
            <span className="rightbarUserName"> Stepen Curry</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
