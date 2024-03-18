const mongoose = require("mongoose");

const ReparationSchema = new mongoose.Schema({
    // PiecesAuto:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"PiecesAuto"
            
    // },
    
    Contact:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Contact"
    },
    
    InfoPanne: {type:String},
    Devis:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Devis"
    },
    
   

    //faire un add reparation pour confirmer devis
    
   
});

module.exports = mongoose.model("Reparation", ReparationSchema);