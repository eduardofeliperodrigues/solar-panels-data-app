import { Router } from 'express';

import dataController from './controllers/dataController.mjs';

const routes = new Router();

routes.get('/', dataController.index);

export default routes;
