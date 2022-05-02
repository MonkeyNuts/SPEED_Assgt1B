import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import routes from './routes/routes.js';
import { mongodbConnect } from './configs/db.js';

dotenv.config();

/// Create and configure Express App
const app = express();

app.use(cors());
app.use('/api', routes);

// Set PORT number to 5000      (Read from .env)
const PORT = process.env.PORT || 5000;

// Set MongoDB      (Read key from .env)
await mongodbConnect(process.env.CONNECTION_URL);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));