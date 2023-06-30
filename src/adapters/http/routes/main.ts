import { Application, Request, Response } from 'express';
import fs from 'fs';
// import container from '@container';

// get version from package.json
const { version } = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

export default function (app: Application): void {
  // health check
  app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
      status: 'Running...',
      version,
    });
  });
}
