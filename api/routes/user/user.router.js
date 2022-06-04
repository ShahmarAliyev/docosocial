const userRouter = require("express").Router();

const {
  httpUpdateUser,
  httpDeleteUser,
  httpGetOneUser,
  httpFollowUser,
  httpUnFollowUser,
  httpGetFriends,
} = require("./user.controller");

userRouter.put("/:id", httpUpdateUser);
userRouter.delete("/:id", httpDeleteUser);
userRouter.get("/", httpGetOneUser);
userRouter.put("/:id/follow", httpFollowUser);
userRouter.put("/:id/unfollow", httpUnFollowUser);
userRouter.get("/friends/:userId", httpGetFriends);

module.exports = userRouter;
