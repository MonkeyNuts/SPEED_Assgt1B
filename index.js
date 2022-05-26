import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import routes from './routes/routes.js';
import { mongodbConnect } from './configs/db.js';

dotenv.config();

/// Create and configure Express App
const app = express();

/// Loading 
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

/// Assign Routes
app.use('/api', routes);

// Set PORT number to 5000      (Read from .env)
const PORT = process.env.PORT || 5000;

// Set MongoDB      (Read key from .env)
await mongodbConnect("mongodb+srv://CISEmember:CISEmember@cisedatabase.tyxyv.mongodb.net/ProjectDatabase?retryWrites=true&w=majority");

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));