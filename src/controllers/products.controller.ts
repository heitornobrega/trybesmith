import { Request, Response } from 'express';
import ProductService from '../services/products.services';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public createProduct = async (req: Request, res: Response) => {   
    const product = req.body;
    const productCreated = await this.productService.createProduct(product);
    res.status(201).json(productCreated);
  };

  public getAllProducts = async (req: Request, res: Response) => {
    const allProducts = await this.productService.getAllProducts();
    res.status(200).json(allProducts);
  };
}

export default ProductController;