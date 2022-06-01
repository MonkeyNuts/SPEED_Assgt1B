// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import path from 'path';
// import {fileURLToPath} from 'url';

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
// const {fileURLToPath} = require("url");

// import routes from './routes/routes.js';
// import { mongodbConnect } from './configs/db.js';

const routes = require("./routes/routes.js");
const mongodbConnect = require("./configs/db.js");


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

dotenv.config();

/// Create and configure Express App
const app = express();

/// Loading 
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

/// Assign Routes
app.use('/api', routes);

//* Heroku deployment section
app.use(express.static(path.resolve(__dirname, "./frontend/build")));
app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));
})
//* End Heroku section

// Set PORT number to 5000      (Read from .env)
const PORT = process.env.PORT || 5000;

// Set MongoDB      (Read key from .env)
mongodbConnect("mongodb+srv://CISEmember:CISEmember@cisedatabase.tyxyv.mongodb.net/ProjectDatabase?retryWrites=true&w=majority");

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));