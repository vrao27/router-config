const { Router } = require("express");
const {
  getAllUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

const usersRouter = Router();

usersRouter.route("/").get(getAllUsers);


module.exports = usersRouter;