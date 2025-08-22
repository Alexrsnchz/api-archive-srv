import { Router } from 'express';
import ApiController from '../controller/ApiController.js';

export const apisRouter = new Router();

apisRouter.get('/', ApiController.getApis);
apisRouter.post('/', ApiController.addApi);

apisRouter.get('/:id', ApiController.getApi);
apisRouter.patch('/:id', ApiController.updateApi);
apisRouter.delete('/:id', ApiController.deleteApi);
