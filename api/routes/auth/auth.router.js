const authRouter = require("express").Router();
const { httpRegisterUser, httpSignInUser } = require("./auth.controller");

authRouter.post("/register", httpRegisterUser);
authRouter.post("/login", httpSignInUser);

module.exports = authRouter;
