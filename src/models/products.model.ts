import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.inteface';

interface NovaOrdem{
  productsIds: number[]
}

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
    
  public async createProduct(product: Product): Promise<Product> {
    const { name, amount } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInsertId] = result;
    const { insertId } = dataInsertId;
    return { id: insertId, ...product };
  }

  public async getAllProducts(): Promise<Product[]> {
    const [result] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    return result as Product[];
  }

  public async updateProductsOrders(orderId: number, order: NovaOrdem): Promise<void> {
    const result = order.productsIds.map(async (element) => {
      const insert = await this.connection
        .execute('UPDATE Trybesmith.Products SET orderId=? WHERE id=?', [orderId, element]);
      return insert;
    });
    Promise.all(result);
  }
}