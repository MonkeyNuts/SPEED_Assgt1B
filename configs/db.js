const mongoose = require('mongoose');

/// Create a connection to db collection from the passing key [url]
async function mongodbConnect(url) {
    try {
        await mongoose.connect(url);
        console.log("Connect to MongoDB successfully!");
    } catch (error) {
        console.log(error);
    }
}

module.exports = mongodbConnect;