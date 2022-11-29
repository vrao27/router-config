const express = require("express");
const path = require("path");
const port = 3000;
const app = express();
const usersRouter = require("./routes/usersRouter");

app.use(express.json());
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
