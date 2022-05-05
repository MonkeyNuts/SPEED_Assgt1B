import ArticleModel from '../models/article.js';

export const createArticle = async (req, res) => {
    // return res.json({ message: 'create Article'});

    const newArticle = new ArticleModel({ title: 'Jackk_Doe\'s Artilce' });

    try {
        await newArticle.save();
        return res.json(newArticle);
    } catch (error) {
        console.log(error);
    }
}

export const getArticle = async (req, res) => {
    return res.json({ message: 'get Article'});
}

export const getAllArticle = async (req, res) => {
    return res.json({ message: 'get all Article'});
}

export const updateArticle = async (req, res) => {
    return res.json({ message: 'update Article'});
}

export const deleteArticle = async (req, res) => {
    return res.json({ message: 'delete Article'});
}


export const createUser = async (req, res) => {
    return res.json({ message: 'create User'});
}