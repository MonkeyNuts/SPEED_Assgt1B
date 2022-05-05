import express from "express";

import { createArticle, getArticle, getAllArticle, updateArticle, deleteArticle, createUser } from '../controllers/controllers.js';

const routes = express.Router();

// Testing route
routes.get('/test', async (req, res) => res.json({ message: 'Testing API Route!' }));


/// Assign Routes down here :

// Article - related routes
routes.get('/article', getAllArticle);
routes.get('/article/:id', getArticle);
routes.post('/article', createArticle);
routes.put('/article/:id', updateArticle);
routes.delete('/article/:id', deleteArticle);

// User - related routes
routes.post('/user', createUser);


export default routes;