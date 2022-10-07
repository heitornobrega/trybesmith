import { Router } from 'express';
import UserControllers from '../controllers/users.controllers';
import userNameValidators from '../middlewares/userNameValidators';
import classeValidators from '../middlewares/classeValidators';
import levelValidators from '../middlewares/levelValidators';
import psswdValidators from '../middlewares/passwordValidators';

const router = Router();

const usersController = new UserControllers();

router.post(
  '/',
  userNameValidators,
  classeValidators,
  levelValidators,
  psswdValidators,
  usersController.createUser,
);

export default router;
