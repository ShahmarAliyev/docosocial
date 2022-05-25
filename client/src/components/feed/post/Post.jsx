import "./Post.styles.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
function Post() {
  return (
    <div className="post">
      <div className="postContainer">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              alt="postProfile"
              className="postProfileImage"
              src="/assets/profile.jpg"
            />
            <span className="postUserName">Shahmar Aliyev</span>
            <span postDate> 5 mins ago</span>
          </div>

          <div className="postTopRight">
            <MoreVertIcon className="" />
          </div>
        </div>

        <div className="postMiddle">
          <span className="postText">My first Post</span>
          <img src="assets/doco.jpg" alt="post" className="postPicture" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <FavoriteIcon className="postReactionHeart postReaction" />
            <ThumbUpIcon className="postReactionLIike postReaction" />
            <span className="postReactionCounter">32 people reacted</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
