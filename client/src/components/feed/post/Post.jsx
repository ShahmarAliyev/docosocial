import "./Post.styles.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Users } from "../../../data";
import { useState } from "react";

function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postContainer">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              alt="postProfile"
              className="postProfileImage"
              src={
                PublicFolder +
                Users.filter((user) => {
                  return user.id === post.userId;
                })[0].profilePicture
              }
            />
            <span className="postUserName">
              {
                Users.filter((user) => {
                  return user.id === post.userId;
                })[0].username
              }
            </span>
            <span className="postDate"> {post.date}</span>
          </div>

          <div className="postTopRight">
            <MoreVertIcon className="" />
          </div>
        </div>

        <div className="postMiddle">
          <span className="postText">{post?.desc}</span>
          <img
            src={PublicFolder + post.photo}
            alt="post"
            className="postPicture"
          />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <FavoriteIcon
              className="postReactionHeart postReaction"
              onClick={likeHandler}
            />
            <ThumbUpIcon
              className="postReactionLIike postReaction"
              onClick={likeHandler}
            />
            <span className="postReactionCounter">{like} people reacted</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
