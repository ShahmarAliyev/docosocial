import "./Share.styles.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import Label from "@mui/icons-material/Label";
import Room from "@mui/icons-material/Room";
import EmojiEmotions from "@mui/icons-material/EmojiEmotions";

export default function Share() {
  return (
    <div className="share">
      <div className="shareContainer">
        <div className="shareTop">
          <img className="shareImage" src="/assets/profile.jpg" alt="" />
          <input
            className="shareInput"
            placeholder="What's popping, Shahmar?"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon htmlColor="tomato" className="shareOptionIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label className="shareOptionIcon" htmlColor="blue" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room className="shareOptionIcon" htmlColor="green" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions
                className="shareOptionIcon"
                htmlColor="goldenrod"
              />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>

          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
