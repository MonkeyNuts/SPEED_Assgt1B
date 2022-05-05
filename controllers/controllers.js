import ArticleModel from '../models/Article.js';


/// POST [ '/article' ]
export const createArticle = async (req, res) => {
    
    /// For Testing
    const newArticle = new ArticleModel({ title: 'Jackk_Doe\'s Artilce' });

    try {
        await newArticle.save();
        return res.json(newArticle);
    } catch (error) {
        console.log(error);
    }
}


/// GET [ '/article/:id' ]
export const getArticle = async (req, res) => {
    return res.json({ message: 'get Article'});
}


/// GET [ '/article' ]
export const getAllArticle = async (req, res) => {
    return res.json({ message: 'get all Article'});
}


/// PUT [ '/article/:id' ]
export const updateArticle = async (req, res) => {
    return res.json({ message: 'update Article'});
}


/// DELETE [ '/article/:id' ]
export const deleteArticle = async (req, res) => {
    return res.json({ message: 'delete Article'});
}



/// POST [ '/user' ]
export const createUser = async (req, res) => {
    return res.json({ message: 'create User'});
}