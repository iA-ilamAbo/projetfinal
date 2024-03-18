const mongoose = require("mongoose");
import Contact from '../../frontend/src/components/Contact';

const ClientSchema = new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String},
    adresse:{type:String},
    Tel:{type:Number},
    Vehicule:{type:String},
    coordonnesbanquaire:{type:String},
   
    commande:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Commande"
    },
    
    wishliste:{type:String},

    Contact:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Contact"
    }
    
    
   
});

module.exports = mongoose.model("Client",ClientSchema);