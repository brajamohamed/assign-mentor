const express = require("express");
const db = require("./db/connect");
const mentorRoutes = require("./routes/mentor.routes");
const studentRoutes = require("./routes/student.routes");
const app = express();
app.use(express.json());
app.use(mentorRoutes);
app.use(studentRoutes);
app.use(db);

db();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(6000, () => {
  console.log("app is running on PORT 6000");
});
