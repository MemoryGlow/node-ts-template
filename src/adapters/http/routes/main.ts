import { Application, Request, Response } from 'express';
import logger from '@logger';
// import container from '@container';

// import InsuranceController from './controllers/insuranceController';

export default function (app: Application): void {
  // const insuranceController: InsuranceController = container.resolve(
  //   'insuranceController'
  // );

  // health check
  app.get('/', (req: Request, res: Response) => {
    logger.info('Health check');

    return res.status(200).json({
      status: 'Running...',
      version: process.env.npm_package_version,
    });
  });
}
