import express from 'express';
import apiRoutes from './apiRoutes';
import { errorHandler } from './middleware/errorMiddleware';
import * as Sentry from '@sentry/node';

const app = express();

// Configuração do Sentry
Sentry.setupExpressErrorHandler(app);


// Middleware
app.use(express.json());

// Routes
app.use('', apiRoutes);

// Error handling middleware
app.use(errorHandler);


export default app;
