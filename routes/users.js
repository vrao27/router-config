var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/users", function (req, res, next) {
  res.send("Send All User Info");
});

router.get("/users/:id", function (req, res, next) {
  res.send("Send user based on id");
});

module.exports = router;
