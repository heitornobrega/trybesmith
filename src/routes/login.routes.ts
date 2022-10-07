import { Router } from 'express';
import UserControllers from '../controllers/users.controllers';
import loginFieldsValidators from '../middlewares/loginFieldsValidators';

const router = Router();

const usersController = new UserControllers();

router.post('/', loginFieldsValidators, usersController.login);

export default router;
