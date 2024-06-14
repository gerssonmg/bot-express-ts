import { Response } from 'express';
import * as Sentry from '@sentry/node';

export const errorHandler = (
  err: Error,
  res: Response,
) => {
  console.error(err.stack);

  // Sentry
  Sentry.captureException(err); // Captura o erro e envia para o Sentry

  res.status(500).json({ error: 'Something went wrong' });
};
