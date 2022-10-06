import { Request, Response } from 'express';
import ProductService from '../services/products.services';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public createProduct = async (req: Request, res: Response) => {   
    console.log('teste');
    const product = req.body;
    const productCreated = await this.productService.createProduct(product);
    res.status(201).json(productCreated);
  };
}

export default ProductController;