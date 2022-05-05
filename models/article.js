import mongoose from "mongoose";

const ArticleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    
    author: {
        type: String,
    },
    
    journalName: {
        type: String,
    },
    
    yop: {
        type: Date,
    },
    
    volume: {
        type: String,
    },
    
    number: {
        type: String,
    },
    
    pages: {
        type: String,
    },
    
    doi: {
        type: String,
    },
    
})

export default Article = mongoose.model('article', ArticleSchema)