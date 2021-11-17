const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//instatiation exp
const app = express();

//instatiation routers
const todoRouter = require("./routers/routes/todos");
//config enviroment varible
dotenv.config();

//built-in level middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routers middleware
app.use("/todos", todoRouter);

//listen port
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
