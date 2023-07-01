import pino, { LoggerOptions } from 'pino';
import { createPinoBrowserSend, createWriteStream } from 'pino-logflare';
import config from './global';

const streamConsole = pino.transport({
  target: 'pino-pretty',
  options: { destination: 1 }, // use 2 for stderr
});

// log to console by default
let stream = streamConsole;

const options: LoggerOptions = {
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
};

if (config.env === 'production') {
  const streamLogFlare = createWriteStream({
    apiKey: config.logger.apiKey,
    sourceToken: config.logger.sourceToken,
  });

  const send = createPinoBrowserSend({
    apiKey: config.logger.apiKey,
    sourceToken: config.logger.sourceToken,
  });

  options.browser = {
    transmit: {
      send: send,
    },
  };

  // log to logFlare for production environment
  stream = streamLogFlare;
}

const logger = pino(options, stream);
export default logger;
