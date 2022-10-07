import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import CustomError from '../utils/customError';

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

const { JWT_SECRET } = process.env;

const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    const err = new CustomError('Token not found', 401);
    return next(err);
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET as Secret);
    (req as CustomRequest).token = payload;
    return next();
  } catch (error) {
    const err = new CustomError('Invalid token', 401);
    return next(err);
  }
};

export default auth;