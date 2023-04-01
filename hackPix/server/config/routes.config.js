import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

import robotRoutes from '../routes/robot.routes';
import userRoutes from '../routes/user.routes';

import errorMiddleware from '../middlewares/error.middleware';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default (app) => {
    // First, we scan through all API routes that we've defined
    app.use('/api/robot', robotRoutes);
    app.use('/api/user', userRoutes);

    // After we've made sure we're not targeting an API, we can let react take care of the GET route targeting
    app.use(express.static(path.join(__dirname, '..', '..', 'client', 'build')));

    // If one of the routes caught an async error, middleware will take over
    app.use(errorMiddleware);
}