const express = require("express");
const app = express();
const db = require("./db");

app.use(express.json());

const userRouter = require("./Router/userRouter");
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("Server is running in 3000");
});
