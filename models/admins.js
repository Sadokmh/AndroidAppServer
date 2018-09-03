var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var admins = new Schema({
    name:String,
    email:String,
    pass:String,
    img:String
});

module.exports = mongoose.model('admins',admins);