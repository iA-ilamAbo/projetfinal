const mongoose = require("mongoose");

const PiecesAutoSchema = new mongoose.Schema({
        Vehicule:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Vehicule"
    },
    categorie:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Categorie"
    },
    SideAssemblage:{type:String},
    dimension:{type:String},
    codReference:{type:String},
    infoDetail:{type:String},// fabricant,type,Article complémentaire
    
    image:{type:String},
    Prix: {type:Number},

});

module.exports = mongoose.model("PiecesAuto", PiecesAutoSchema);