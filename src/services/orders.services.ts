import OrderModel from '../models/orders.model';
import Order from '../interfaces/order.interface';
import connection from '../models/connection';

class OrderService {
  public model: OrderModel;
    
  constructor() {
    this.model = new OrderModel(connection);
  }

  public getAllOrders(): Promise<Order[]> {
    return this.model.getAllOrders();
  }
}

export default OrderService;