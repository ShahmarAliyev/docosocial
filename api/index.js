const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const authRouter = require("./routes/auth/auth.router");
const userRouter = require("./routes/user/user.router");
const postRouter = require("./routes/post/post.router");

dotenv.config();

const app = express();
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
  console.log("Server connected to MongoDB");
});

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.BACKEND_PORT || 8800, () => {
  console.log("Server started at Port 8800");
});
