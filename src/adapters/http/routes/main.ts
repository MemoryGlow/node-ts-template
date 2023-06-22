import { Application, Request, Response } from 'express';
// import container from '@container';

// import InsuranceController from './controllers/insuranceController';

export default function (app: Application): void {
  // const insuranceController: InsuranceController = container.resolve(
  //   'insuranceController'
  // );

  // health check
  app.get('/', (req: Request, res: Response) => res.json(200));
}
