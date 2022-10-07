import { Pool, ResultSetHeader } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
    
  public async getAllOrders(): Promise<Order[]> {
    const [result] = await this.connection.execute(
      `SELECT 
      ord.id,
      ord.userId,
      JSON_ARRAYAGG(pro.id) as productsIds
      FROM Trybesmith.Orders ord, Trybesmith.Products pro
      WHERE ord.id = pro.orderId
      GROUP BY ord.id; `,
    );
    return result as Order[];
  }

  public async insertOrder(userId: number): Promise<number> {
    const result = await this.connection
      .execute<ResultSetHeader>('INSERT INTO Trybesmith.Orders (userId) VALUES (?)', [userId]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return insertId;
  }
}