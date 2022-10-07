import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const schema = Joi.string();

function classeValidators(req: Request, res: Response, next: NextFunction) {  
  const user = req.body;
  if (user.classe === undefined) {
    return res.status(400).json({ message: '"classe" is required' }); 
  }
  if (schema.validate(user.classe).error) {
    return res.status(422).json({ message: '"classe" must be a string' }); 
  }
  if (user.classe.length <= 2) {
    return res.status(422)
      .json({ message: '"classe" length must be at least 3 characters long' }); 
  }
  return next();
}

export default classeValidators;