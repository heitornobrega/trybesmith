import { Request, Response, NextFunction } from 'express';

function loginFieldsValidators(req: Request, res: Response, next: NextFunction) {
  const usr = req.body;
  if (usr.username === undefined) {
    return res.status(400).json({ message: '"username" is required' }); 
  }
  if (usr.password === undefined) {
    return res.status(400).json({ message: '"password" is required' }); 
  }
  return next();
}

export default loginFieldsValidators;