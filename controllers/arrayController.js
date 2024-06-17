const Array = require("../models/array.js");

exports.addArray = function(request, response){
    response.render("create.hbs")
}
exports.operationsArray = function(request, response){
    response.render("arrays.hbs", {
        arrays: Array.getAll
    });
};
exports.postArray = function(request, response){
    const arraynum1 = request.body.num1
    const arraynum2 = request.body.num2
    const arraynum3 = request.body.num3
    const array = new Array(arraynum1, arraynum2, arraynum3);
    array.save;
    response.redirect("/arrays");
};