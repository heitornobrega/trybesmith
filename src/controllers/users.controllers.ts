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

  public login = async (req: Request, res: Response) => {
    const user = req.body;
    const userExist = await this.service.getUser(user);
    if (userExist) {
      const token = jwt.sign(user, process.env.JWT_SECRET as Secret);
      return res.status(200).json({ token });
    }
    return res.status(401).json({ message: 'Username or password invalid' });
  };
}