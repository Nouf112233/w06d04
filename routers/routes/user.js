const express = require("express");
const { addNewUser } = require("./../controllers/user");
const userRouter = express.Router();

userRouter.post("/create", addNewUser);

module.exports = userRouter;
