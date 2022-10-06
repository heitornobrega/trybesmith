// import { NotFoundError } from 'restify-errors';
import ProductModel from '../models/products.model';
import Product from '../interfaces/product.inteface';
import connection from '../models/connection';

class ProductService {
  public model: ProductModel;
    
  constructor() {
    this.model = new ProductModel(connection);
  }

  public createProduct(product: Product): Promise<Product> {
    return this.model.createProduct(product);
  }
}

export default ProductService;