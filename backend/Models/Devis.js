const mongoose = require("mongoose");

const DevisSchema = new mongoose.Schema({
    PiecesAuto:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"PiecesAuto"       
    },
    
    fraisPrestation: {type:Number},
    detailPrestation: {type:String},//nbr de prestations, types de prestations, 

    total: {type:Number},//fraisPrestation + prix de la piece
    
   
});

module.exports = mongoose.model("Devis", DevisSchema);