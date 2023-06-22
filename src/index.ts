import 'module-alias/register';
import 'dotenv/config';

import Server from '@adapters/http/server';
import config from '@config/global';

const server = new Server(config.app.port);

// useful for integration tests
export default server;
