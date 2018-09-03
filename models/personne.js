var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personne = new Schema({
    nom:String,
    des:String,
    img:String
});

module.exports = mongoose.model('personne',personne);