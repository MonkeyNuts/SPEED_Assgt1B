const express = require("express");

const ArticleController = require("../controllers/controllers.js");

const routes = express.Router();

// Testing route
routes.get('/test', async (req, res) => res.json({ message: 'Testing API Route!' }));


/// Assign Routes down here :

// Article - related routes
routes.get('/article', ArticleController.getAllArticle);
routes.get('/article/:id', ArticleController.getArticle);
routes.post('/article', ArticleController.createArticle);
routes.patch('/article/:id', ArticleController.updateArticle);
routes.delete('/article/:id', ArticleController.deleteArticle);

// Get Articles that belongs to Moderator
routes.get('/moderator/article', ArticleController.getModeratorArticles);

// Get Articles that belongs to Analyst
routes.get('/analyst/article', ArticleController.getAnalystArticles);

// Search by Article names
routes.get('/search/:title/:moderator/:analyst', ArticleController.searchByTitle);


module.exports = routes;