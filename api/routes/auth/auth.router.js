const authRouter = require("express").Router();
const { httpRegisterUser } = require("./auth.controller");

authRouter.post("/register", httpRegisterUser);

module.exports = authRouter;
