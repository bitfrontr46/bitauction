
var mongoose = require('mongoose');
var db = null;

var boardSchema = null;
var post = null;
var collection = null;

module.exports = {
    connection : () => {
        mongoose.set("useNewUrlParser", true)
        mongoose.set("useFindAndModify", false)
        mongoose.set("useCreateIndex", true)
        mongoose.set("useUnifiedTopology", true)
        mongoose.connect("mongodb://localhost/project2");
        db = mongoose.connection

        db.once("open", function () {
            console.log("DB connected")
        });

        db.on("error", function (err) {
            console.log("DB ERROR : ", err)
        });
    },

    getDB : () => db,
    getCollection  : () => collection,
    getPost  : () => post,  
} 


