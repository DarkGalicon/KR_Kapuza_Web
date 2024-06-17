const express = require("express");
const arrayController = require("../controllers/arrayController.js");
const arrayRouter = express.Router();

arrayRouter.use("/postarray", arrayController.postArray)
arrayRouter.use("/create", arrayController.addArray);
arrayRouter.use("/", arrayController.operationsArray);
 
module.exports = arrayRouter;