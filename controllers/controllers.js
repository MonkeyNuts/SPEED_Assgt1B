import ArticleModel from '../models/Article.js';
import UserModel from '../models/User.js';


/*     ARTICLE CONTROLLERS     */

/// POST [ '/article' ]
export const createArticle = async (req, res) => {

    /// For Testing
    const newArticle = new ArticleModel(req.body);
    try {
        await newArticle.save();
        return res.json(newArticle);
    } catch (error) {
        return res.status(400).json({message: error.message})
    }

    // ArticleModel.create(req.body)
    //     .then(article => res.json({ message: 'New article created successfully!'}))
    //     .catch(err => res.status(400).json({ error: 'No Article found!'}));
}


/// GET [ '/article' ]
export const getAllArticle = async (req, res) => {
    ArticleModel.find()
        .then(articles => res.json(articles))
        .catch(err => res.status(404).json({ error: 'No Article found!'}));
}


/// GET [ '/article/:id' ]
export const getArticle = async (req, res) => {
    ArticleModel.findById(req.params.id)
        .then(article => res.json(article))
        .catch(err => res.status(404).json({ error: 'No Article found!'}));
}


/// PUT [ '/article/:id' ]
export const updateArticle = async (req, res) => {
    ArticleModel.findByIdAndUpdate(req.params.id)
        .then(article => res.json(article))
        .catch(err => res.status(400).json({ error: 'No Article found!'}));
}


/// DELETE [ '/article/:id' ]
export const deleteArticle = async (req, res) => {
    try {
        await ArticleModel.findByIdAndRemove(req.params.id);
    } catch (error) {
        res.status(404).json({message: error});
    }

    return res.json({ message: 'Article Delete completed!' });
}


/*     USER CONTROLLERS     */

/// POST [ '/user' ]
export const createUser = async (req, res) => {
    UserModel.create(req.body)
        .then(user => res.json({ message: 'New User created successfully!'}))
        .catch(err => res.status(400).json({ err }));
}