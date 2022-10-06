import { Request, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import UserServices from '../services/users.services';

export default class UserControllers {
  public service: UserServices;
    
  constructor() {
    this.service = new UserServices();
  }

  public createUser = async (req: Request, res: Response) => {
    const user = req.body;
    await this.service.createUser(user);
    const token = jwt.sign(user, process.env.JWT_SECRET as Secret);
    res.status(201).json({ token });
  };
}