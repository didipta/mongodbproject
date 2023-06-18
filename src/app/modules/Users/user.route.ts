import express from 'express';
import uservalidation from './uservalidation';
import validateRequest from '../../middleware/validateRequest';
import { UserController } from './user.controller';
const router = express.Router();

router.post('/', validateRequest(uservalidation), UserController.createUser);
router.get('/', UserController.getAlluser);
router.get('/:id', UserController.getSingleuser);
router.patch('/:id', UserController.updateuser);
router.delete('/:id', UserController.deleteuser);

export const UserRoutes = router;
