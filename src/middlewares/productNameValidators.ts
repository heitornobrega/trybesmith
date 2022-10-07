import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const schema = Joi.string();

function productNameValidators(req: Request, res: Response, next: NextFunction) {  
  const product = req.body;
  if (product.name === undefined) {
    return res.status(400).json({ message: '"name" is required' }); 
  }
  if (schema.validate(product.name).error) {
    return res.status(422).json({ message: '"name" must be a string' }); 
  }
  if (product.name.length <= 2) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' }); 
  }
  return next();
}

export default productNameValidators;