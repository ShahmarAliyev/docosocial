const Post = require("../../models/post/post");
const User = require("../../models/user/user");

const httpCreatePost = async (req, res) => {
  const newPost = await new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

const httpUpdatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post has been updated");
    } else {
      res.status(403).json("You can only update your posts");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const httpDeletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne({ $set: req.body });
      res.status(200).json("Post has been deleted");
    } else {
      res.status(403).json("You can only delete your posts");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const httpLikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("You liked the post");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("You disliked the post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const httpGetPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

const httpGetFeed = async (req, res) => {
  let timelinePosts = [];
  try {
    const currentUser = await User.findById(req.body.userId);
    const currentUserPosts = await Post.find({ userId: currentUser._id });
    const followingUsersPost = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    timelinePosts = [...currentUserPosts, ...followingUsersPost];
    res.status(200).json(timelinePosts);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  httpCreatePost,
  httpUpdatePost,
  httpDeletePost,
  httpLikePost,
  httpGetPost,
  httpGetFeed,
};
