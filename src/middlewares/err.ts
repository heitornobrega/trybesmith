import { Request, Response, NextFunction } from 'express';
import CustomError from '../utils/customError';

const erro = (err: CustomError, _req:Request, res:Response, _next:NextFunction) => {
  if (err.statusCode) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }
  console.error(err);
  return res.status(500).json({ message: `Internal server error: ${err.message}` });
};

export default erro;