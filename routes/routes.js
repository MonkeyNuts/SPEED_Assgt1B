import express from "express";

import {} from '../controllers/controllers.js';

const routes = express.Router();

// Testing route
routes.get('/test', async (req, res)  => res.json({message:'Testing API Route!'}));

/// Assign Routes down here :


export default routes;