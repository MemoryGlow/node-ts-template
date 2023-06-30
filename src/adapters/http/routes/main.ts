import { Application } from 'express';
import container from '@container';

export default function (app: Application): void {
  const healthCheckController = container.resolve('healthCheckController');

  // health check
  app.get('/', healthCheckController.main);
}
