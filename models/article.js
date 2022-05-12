import mongoose from "mongoose";

const ArticleSchema = mongoose.Schema({
    
    title: {
        type: String,
        required: true
    },
    
    author: {
        type: String,
        required: true,
    },
    
    source: {
        type: String,
        required: true,
    },
    
    yop: {
        type: String,
        required: true,
    },

    doi: {
        type: String,
        required: true,
    },

    practices: {
        type: String,
        required: true,
    },
    
})

export default mongoose.model('article', ArticleSchema);