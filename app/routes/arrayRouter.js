const express = require("express");
const userController = require("../controllers/userController.js");
const arrayRouter = express.Router();
 
arrayRouter.use("/create", userController.addUser);
arrayRouter.use("/", userController.getUsers);
 
module.exports = arrayRouter;