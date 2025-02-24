import express from 'express';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import { PORT } from './config/env.js';
import jobsRouter from './routes/jobsRoutes.js';


const app = express();
dotenv.config();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the job post API!');
});

app.use('/api', jobsRouter);

app.listen(PORT, () => {
    console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);
});

export default app;