import 'dotenv/config';

import config from '@config/global';
import Server from '@adapters/http/server';

async function init() {
  const server = new Server(config.app.port);
  server.startListen();
}

init();
