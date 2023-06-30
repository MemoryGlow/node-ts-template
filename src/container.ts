import { createContainer, asClass } from 'awilix';

import HealthCheckController from '@adapters/http/controllers/HealthCheck.controller';

const container = createContainer();

container.register({
  healthCheckController: asClass(HealthCheckController).singleton(),
});

export default container;
