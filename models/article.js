import mongoose from "mongoose";

const ArticleSchema = mongoose.Schema({
    
    title: {
        type: String,
        required: true
    },
    
    authors: {
        type: String,
        required: true,
    },
    
    source: {
        type: String,
        required: true,
    },
    
    pubyear: {
        type: String,
        required: true,
    },

    doi: {
        type: String,
        required: true,
    },

    claim: {
        type: String,
        required: true,
    },

    evidence: {
        type: String,
        required: true,
    },
    
})

export default mongoose.model('article', ArticleSchema);