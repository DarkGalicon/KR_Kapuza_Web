const express = require("express");
const app = express();
const arrayRouter = require("./routes/arrayRouter.js");
const homeRouter = require("./routes/homeRouter.js");
 
app.use("/users", arrayRouter);
app.use("/", homeRouter);

app.use(function(req, res, next) {
    res.status(404).send("Not Found");
})

app.listen(80, ()=>console.log("Сервер запущен и ожидает подключения..."));