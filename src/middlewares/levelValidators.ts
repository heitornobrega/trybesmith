import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const schema = Joi.number().integer();

function levelValidators(req: Request, res: Response, next: NextFunction) {  
  const user = req.body;
  if (user.level === undefined) {
    return res.status(400).json({ message: '"level" is required' }); 
  }
  if (schema.validate(user.level).error) {
    return res.status(422).json({ message: '"level" must be a number' }); 
  }
  if (user.level < 1) {
    return res.status(422)
      .json({ message: '"level" must be greater than or equal to 1' }); 
  }
  return next();
}

export default levelValidators;