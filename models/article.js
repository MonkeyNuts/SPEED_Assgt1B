const mongoose = require('mongoose');

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
        default: "product quality improvement"
    },

    evidence: {
        type: String,
        default: "weak support"
    },

    sepractice: {
        type: String,
        default: "tdd"
    },

    needModerator: {
        type: Boolean,
        default: true,
    },
    
    needAnalyst: {
        type: Boolean,
        default: false,
    }
})

const ArticleModel = mongoose.model('article', ArticleSchema);

module.exports = ArticleModel;