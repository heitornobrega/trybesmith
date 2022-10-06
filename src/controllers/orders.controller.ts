import { Request, Response } from 'express';
import OrderService from '../services/orders.services';

class OrderController {
  constructor(private ordersService = new OrderService()) { }

  public getAllOrders = async (req: Request, res: Response) => {
    const allOrders = await this.ordersService.getAllOrders();
    res.status(200).json(allOrders);
  };
}

export default OrderController;