const mongoose = require("mongoose");

const categorieSchema = new mongoose.Schema({
    Categoriename:{type:String},
    souscategorie:{type:String},//il exsiste plusieurs sous categorie sous chauque categorie
    marque :{type:String},
    model:{type:Number},
    motorisation:{type:String},
    Type:{type:string},//poid lourd, camion, autocar, moto,
     
});

module.exports = mongoose.model("Categorie", categorieSchema);
