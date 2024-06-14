const Sentry = require('@sentry/node');
const { nodeProfilingIntegration } = require('@sentry/profiling-node');

// Ensure to call this before requiring any other modules!
Sentry.init({
  dsn: 'https://00291b3d4f934776a81953a73252c293@o348490.ingest.us.sentry.io/2218301',
  integrations: [
    // Add our Profiling integration
    nodeProfilingIntegration(),
  ],

  // Add Tracing by setting tracesSampleRate
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // Set sampling rate for profiling
  // This is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});
