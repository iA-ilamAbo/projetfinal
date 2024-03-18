const mongoose = require("mongoose");

const BagSchema = new mongoose.Schema({
    PiecesAuto:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"PiecesAuto"
            
    },
    Reparation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Reparation"
    },
    quantite:{type:Number},
    soustotale:{type:Number},
    Fraislivraison:{type:Number},
    Totale:{type:Number}


});

module.exports = mongoose.model("Bag", BagSchema);
