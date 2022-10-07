import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const schema = Joi.array();

function productsIdsValidators(req: Request, res: Response, next: NextFunction) {  
  const product = req.body;
  if (product.productsIds === undefined) {
    return res.status(400).json({ message: '"productsIds" is required' }); 
  }
  if (schema.validate(product.productsIds).error) {
    return res.status(422).json({ message: '"productsIds" must be an array' }); 
  }
  if (product.productsIds.length === 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' }); 
  }
  return next();
}

export default productsIdsValidators;