const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();
const cookieparser = require("cookie-parser");



const app= express();// Création de l'application Express

app.use(cors());// Middleware pour activer CORS (Cross-Origin Resource Sharing)
app.use(express.json());// Middleware pour permettre à Express de comprendre les requêtes au format JSON
app.use(cookieparser());
const PORT= process.env.PORT || 5000;
// Connexion à la base de données MongoDB
mongoose.connect(process.env.CONNECTION_DB).then(()=>{
// Démarrage du serveur Express une fois la connexion établie
    app.listen(PORT,()=>{
        console.log("le serveur est en marche",PORT);
    });
   
});