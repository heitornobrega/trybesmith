import OrderModel from '../models/orders.model';
import Order from '../interfaces/order.interface';
import connection from '../models/connection';
import User from '../interfaces/user.interface';
import UserModel from '../models/users.model';
import ProductModel from '../models/products.model';

export interface NewOrder{
  productsIds: number[]
}

class OrderService {
  public model: OrderModel;

  public userModel: UserModel;

  public productModel: ProductModel;
  
  constructor() {
    this.model = new OrderModel(connection);
    this.userModel = new UserModel(connection);
    this.productModel = new ProductModel(connection);
  }

  public getAllOrders(): Promise<Order[]> {
    return this.model.getAllOrders();
  }

  public async createOrder(userCredentials: User, order: NewOrder) {
    const user = await this.userModel.getUserId(userCredentials);
    const userId = user[0].id;
    const productsIds = order;
    const orderId = await this.model.insertOrder(userId as number);
    await this.productModel.updateProductsOrders(orderId as number, order);
    return { userId, ...productsIds };
  }
}

export default OrderService;