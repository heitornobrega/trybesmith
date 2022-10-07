import { Router } from 'express';
import OrderController from '../controllers/orders.controller';
import auth from '../middlewares/auth';
import productsIdsValidators from '../middlewares/productsIdsValidators';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.getAllOrders);
router.post('/', auth, productsIdsValidators, orderController.createOrder);

export default router;