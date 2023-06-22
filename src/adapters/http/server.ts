import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';

import routes from './routes/main';

class ServerHttp {
  server: Application;

  constructor(port: number) {
    this.server = express();
    this.setupMiddleware();

    routes(this.server);
    this.startListen(port);
  }

  startListen(port: number): void {
    this.server.listen(port, () => {
      console.info(`Http Server listing in port:${port}`);
    });
  }

  setupMiddleware(): void {
    this.server.use(helmet());
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
  }
}

export default ServerHttp;
