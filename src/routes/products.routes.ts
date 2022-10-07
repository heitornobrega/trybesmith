import { Router } from 'express';
import ProductController from '../controllers/products.controller';
import productAmoutValidators from '../middlewares/productAmoutValidators';
import productNameValidators from '../middlewares/productNameValidators';

const router = Router();

const productsController = new ProductController();

router.get('/', productsController.getAllProducts);
router.post('/', productNameValidators, productAmoutValidators, productsController.createProduct);

export default router;