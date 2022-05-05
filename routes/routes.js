import express from "express";

import { createArticle, getArticle, getAllArticle, updateArticle, deleteArticle, createUser } from '../controllers/controllers.js';

const routes = express.Router();

// Testing route
routes.get('/test', async (req, res) => res.json({ message: 'Testing API Route!' }));


/// Assign Routes down here :

// Article - related routes
routes.get('/', getAllArticle);
routes.get('/:id', getArticle);
routes.post('/', createArticle);
routes.put('/:id', updateArticle);
routes.delete('/:id', deleteArticle);

// User - related routes
routes.post('/', createUser);


export default routes;