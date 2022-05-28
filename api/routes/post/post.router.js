const postRouter = require("express").Router();
const {
  httpCreatePost,
  httpUpdatePost,
  httpDeletePost,
  httpLikePost,
  httpGetPost,
  httpGetFeed,
} = require("./post.controller");

postRouter.post("/", httpCreatePost);
postRouter.put("/:id", httpUpdatePost);
postRouter.delete("/:id", httpDeletePost);
postRouter.put("/:id/like", httpLikePost);
postRouter.get("/:id", httpGetPost);
postRouter.get("/timeline/:userId", httpGetFeed);

module.exports = postRouter;
