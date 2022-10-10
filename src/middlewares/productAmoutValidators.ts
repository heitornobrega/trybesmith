import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const schema = Joi.string();

function productAmoutValidators(req: Request, res: Response, next: NextFunction) {  
  const product = req.body;
  if (product.amount === undefined) {
    return res.status(400).json({ message: '"amount" is required' }); 
  }
  if (schema.validate(product.amount).error) {
    return res.status(422).json({ message: '"amount" must be a string' }); 
  }
  if (product.amount.length <= 2) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' }); 
  }
  return next();
}

export default productAmoutValidators;
//