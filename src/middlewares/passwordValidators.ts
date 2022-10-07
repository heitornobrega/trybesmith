import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const schema = Joi.string();

function psswdValidators(req: Request, res: Response, next: NextFunction) {  
  const user = req.body;
  if (user.password === undefined) {
    return res.status(400).json({ message: '"password" is required' }); 
  }
  if (schema.validate(user.password).error) {
    return res.status(422).json({ message: '"password" must be a string' }); 
  }
  if (user.password.length < 8) {
    return res.status(422)
      .json({ message: '"password" length must be at least 8 characters long' }); 
  }
  return next();
}

export default psswdValidators;