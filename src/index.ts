import 'dotenv/config';

import config from '@config/global';
import Server from '@adapters/http/server';
import { connectMongoDB } from '@config/mongo';

async function init() {
  // start connection with database
  await connectMongoDB();

  // start http server
  const server = new Server(config.app.port);
  server.startListen();
}

init();
