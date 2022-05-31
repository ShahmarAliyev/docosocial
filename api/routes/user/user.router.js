const userRouter = require("express").Router();

const {
  httpUpdateUser,
  httpDeleteUser,
  httpGetOneUser,
  httpFollowUser,
  httpUnFollowUser,
} = require("./user.controller");

userRouter.put("/:id", httpUpdateUser);
userRouter.delete("/:id", httpDeleteUser);
userRouter.get("/", httpGetOneUser);
userRouter.put("/:id/follow", httpFollowUser);
userRouter.put("/:id/unfollow", httpUnFollowUser);

module.exports = userRouter;
