import { Request, Response } from 'express';
import fs from 'fs';

class HealthCheckController {
  private version;

  constructor() {
    const { version } = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    this.version = version;
  }

  main = (req: Request, res: Response) => {
    return res.status(200).json({
      status: 'Running...',
      version: this.version,
    });
  };
}

export default HealthCheckController;
