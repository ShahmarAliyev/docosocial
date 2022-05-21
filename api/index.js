const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const authRouter = require("./routes/auth/auth.router");

dotenv.config();

const app = express();
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
  console.log("Server connected to MongoDB");
});

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.BACKEND_PORT || 8800, () => {
  console.log("Server started at Port 8800");
});
