import express from "express";

import { createArticle, getArticle, getAllArticle, updateArticle, deleteArticle, createUser, getModeratorArticles, getAnalystArticles } from '../controllers/controllers.js';

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

routes.get('/moderator/article', getModeratorArticles);

routes.get('/analyst/article', getAnalystArticles);

// User - related routes
routes.post('/user', createUser);


export default routes;