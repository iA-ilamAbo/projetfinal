const mongoose = require("mongoose");

const commandeSchema = new mongoose.Schema({
    numero:{type:Number},
    date:{type:Number},
    PiecesAuto:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"PiecesAuto"
            
    },
    quantite:{type:Number},

    Reparation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Reparation"
    },
    Modepaiement:{type:Number},

});

module.exports = mongoose.model("Commande", commandeSchema);
//retour commande