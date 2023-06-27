import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';

import logger from '@config/logger';
import routes from './routes/main';

class ServerHttp {
  port: number;
  server: Application;

  constructor(port: number) {
    this.server = express();
    this.port = port;
    this.setupMiddleware();

    this.setupRoutes();
  }

  startListen(): void {
    const app = this.server.listen(this.port, () => {
      logger.info(`Http Server listing in port:${this.port}`);
    });

    process.on('SIGTERM', async () => {
      app.close();
    });
  }

  setupRoutes() {
    routes(this.server);
  }

  setupMiddleware(): void {
    this.server.use(helmet());
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
  }
}

export default ServerHttp;
