import "./Post.styles.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Users } from "../../../data";

function Post({ post }) {
  return (
    <div className="post">
      <div className="postContainer">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              alt="postProfile"
              className="postProfileImage"
              src={
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
          <img src={post.photo} alt="post" className="postPicture" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <FavoriteIcon className="postReactionHeart postReaction" />
            <ThumbUpIcon className="postReactionLIike postReaction" />
            <span className="postReactionCounter">
              {post.like} people reacted
            </span>
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
