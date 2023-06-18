import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import cowvalidation from './cowvalidation';
import { cowController } from './cow.controller';
const router = express.Router();

router.post('/', validateRequest(cowvalidation), cowController.createcow);
router.get('/', cowController.getAllcows);
router.get('/:id', cowController.getSinglecow);
router.patch('/:id', cowController.updatecow);
router.delete('/:id', cowController.deletecow);

export const cowRoutes = router;
