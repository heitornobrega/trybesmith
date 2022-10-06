import { Router } from 'express';
import UserControllers from '../controllers/users.controllers';

const router = Router();

const usersController = new UserControllers();

router.post('/', usersController.createUser);

export default router;
