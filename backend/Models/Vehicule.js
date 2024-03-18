const mongoose = require("mongoose");

const VehiculeSchema = new mongoose.Schema({
    marque :{type:String},
    model:{type:Number},
    motorisation:{type:String},
    Type:{type:string},//poid lourd, camion, autocar, moto, 
    soustype:{type:string},//coupe, cabriole,decapotable,2porte,4*4...
    image:{type:String},
    logo:{type:String},
    couleure:{type:String},
    immatriculation:{type:Number},
    

    
   
});

module.exports = mongoose.model("Vehicule", VehiculeSchema);