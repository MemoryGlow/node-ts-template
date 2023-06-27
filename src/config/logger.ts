import pino from 'pino';
import config from './global';

const transport = pino.transport({
  target: 'pino-pretty',
  options: { destination: 1 }, // use 2 for stderr
});

const logger = pino(
  {
    level: config.app.logLevel,
    base: {
      pid: false,
    },
    formatters: {
      bindings: (bindings) => {
        return { host: bindings.hostname };
      },
      level: (label) => {
        return { level: label.toUpperCase() };
      },
    },
    timestamp: () => `,"time":"${new Date().toISOString()}"`,
  },
  transport
);

export default logger;
