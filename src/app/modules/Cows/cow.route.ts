import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import cowvalidation from './cowvalidation';
import { cowController } from './cow.controller';
const router = express.Router();

router.post('/', validateRequest(cowvalidation), cowController.createcow);

export const cowRoutes = router;
