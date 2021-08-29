import * as express from 'express';
import landing from './landing';
const routes = express.Router();

routes.use(landing);

export default routes;