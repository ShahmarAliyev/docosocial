import "./Post.styles.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
function Post({ post }) {
  const [user, setUser] = useState({});

  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postContainer">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              {user.profilePicture && (
                <img
                  alt="postProfile"
                  className="postProfileImage"
                  src={PublicFolder + user.profilePicture}
                />
              )}
            </Link>
            <span className="postUserName">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon className="" />
          </div>
        </div>

        <div className="postMiddle">
          <span className="postText">{post.desc}</span>
          <img
            src={PublicFolder + post.img}
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
