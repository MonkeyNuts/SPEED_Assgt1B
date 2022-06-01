import express from "express";

import { createArticle, getArticle, getAllArticle, updateArticle, deleteArticle, getModeratorArticles, getAnalystArticles, searchByTitle } from '../controllers/controllers.js';

const routes = express.Router();

// Testing route
routes.get('/test', async (req, res) => res.json({ message: 'Testing API Route!' }));


/// Assign Routes down here :

// Article - related routes
routes.get('/article', getAllArticle);
routes.get('/article/:id', getArticle);
routes.post('/article', createArticle);
routes.patch('/article/:id', updateArticle);
routes.delete('/article/:id', deleteArticle);

// Get Articles that belongs to Moderator
routes.get('/moderator/article', getModeratorArticles);

// Get Articles that belongs to Analyst
routes.get('/analyst/article', getAnalystArticles);

// Search by Article names
routes.get('/search/:title/:moderator/:analyst', searchByTitle);


export default routes;