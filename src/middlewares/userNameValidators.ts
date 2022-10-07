import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const schema = Joi.string();

function userNameValidators(req: Request, res: Response, next: NextFunction) {  
  const user = req.body;
  if (user.username === undefined) {
    return res.status(400).json({ message: '"username" is required' }); 
  }
  if (schema.validate(user.username).error) {
    return res.status(422).json({ message: '"username" must be a string' }); 
  }
  if (user.username.length <= 2) {
    return res.status(422)
      .json({ message: '"username" length must be at least 3 characters long' }); 
  }
  return next();
}

export default userNameValidators;