import { Request, Response } from 'express';
import User from '../interfaces/user.interface';
import { CustomRequest } from '../middlewares/auth';
import OrderService from '../services/orders.services';

class OrderController {
  constructor(private ordersService = new OrderService()) { }

  public getAllOrders = async (req: Request, res: Response) => {
    const allOrders = await this.ordersService.getAllOrders();
    res.status(200).json(allOrders);
  };

  public createOrder = async (req: Request, res: Response) => {
    const userCredentials = (req as CustomRequest).token as User;
    const order = req.body;
    const orderPlacedSuccessfully = await this.ordersService.createOrder(userCredentials, order);
    console.log(orderPlacedSuccessfully);
    res.status(201).json(orderPlacedSuccessfully);
  };
}

export default OrderController;