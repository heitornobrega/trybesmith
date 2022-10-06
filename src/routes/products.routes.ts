import { Router } from 'express';
import ProductController from '../controllers/products.controller';

const router = Router();

const productsController = new ProductController();

router.get('/', productsController.getAllProducts);
router.post('/', productsController.createProduct);

export default router;