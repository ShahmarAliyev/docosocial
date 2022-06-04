import "./Post.styles.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useContext, useEffect, useState } from "react";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";

function Post({ post }) {
  const { user: currentUser } = useContext(AuthContext);
  const [user, setUser] = useState({});

  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `https://celebritysocial.herokuapp.com/api/users?userId=${post.userId}`
      );
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (error) {}

    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postContainer">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              {user.username && (
                <img
                  alt="postProfile"
                  className="postProfileImage"
                  src={
                    user.profilePicture
                      ? PublicFolder + user.profilePicture
                      : PublicFolder + "posts/noAvatar.png"
                  }
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
          <span className="postText">{post?.desc}</span>
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
