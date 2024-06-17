const express = require("express");
const arrayController = require("../controllers/arrayController.js");
const arrayRouter = express.Router();

arrayRouter.use("/postArray", arrayController.postArray)
arrayRouter.use("/create", arrayController.addArray);
arrayRouter.use("/", arrayController.operationsArray);
 
module.exports = arrayRouter;