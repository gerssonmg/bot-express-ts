import express from 'express';
import apiRoutes from './apiRoutes';
import apiWebhookRoutes from './webhook/hotmart';
import { errorHandler } from './middleware/errorMiddleware';
import * as Sentry from '@sentry/node';

const app = express();

// Configuração do Sentry
Sentry.setupExpressErrorHandler(app);

// Middleware
app.use(express.json());

// Routes
app.use('/hotmart', apiWebhookRoutes);
app.use('', apiRoutes);

// Error handling middleware
app.use((err: any, req: any, res: any, next: any) => errorHandler(err, req, res, next));

export default app;
