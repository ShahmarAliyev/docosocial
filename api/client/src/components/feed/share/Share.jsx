import "./Share.styles.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import Label from "@mui/icons-material/Label";
import Room from "@mui/icons-material/Room";
import EmojiEmotions from "@mui/icons-material/EmojiEmotions";
import CancelIcon from "@mui/icons-material/Cancel";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";

export default function Share() {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;

      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      try {
        await axios.post(
          "https://celebritysocial.herokuapp.com/api/upload",
          data
        );
      } catch (error) {
        console.log(error);
      }
    }
    try {
      await axios.post(
        "https://celebritysocial.herokuapp.com/api/posts/",
        newPost
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="share">
      <div className="shareContainer">
        <div className="shareTop">
          <img
            className="shareImage"
            src={
              user.profilePicture
                ? PublicFolder + user.profilePicture
                : PublicFolder + "assets/posts/noAvatar.png"
            }
            alt=""
          />
          <input
            className="shareInput"
            placeholder={"What's popping, " + user.username + "?"}
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <CancelIcon
              className="shareCancelImg"
              onClick={() => setFile(null)}
            />
          </div>
        )}

        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMediaIcon htmlColor="tomato" className="shareOptionIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png, .jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
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

          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
