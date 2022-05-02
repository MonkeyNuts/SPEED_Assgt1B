import mongoose from "mongoose";

/// Create a connection to db collection from the passing key [url]
export const mongodbConnect = async (url) => {
    try {
        await mongoose.connect(url);
        console.log("Connect to MongoDB successfully!");
    } catch (error) {
        console.log(error);
    }
}