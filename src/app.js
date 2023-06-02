const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const studentRouter = require("./routers/students");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(studentRouter);

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
/*
app.get("/", (req, res) => {
  res.send("hlo khushi me as student");
});
*/
//res.send("hlo khushi");
