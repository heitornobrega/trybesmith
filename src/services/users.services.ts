import User from '../interfaces/user.interface';
import connection from '../models/connection';
import UserModel from '../models/users.model';

export default class UserServices {
  public model: UserModel;
    
  constructor() {
    this.model = new UserModel(connection);
  }

  async createUser(user: User): Promise<void> {
    await this.model.createUser(user);
  }

  async getUser(user: User): Promise<boolean> {
    const [userExist] = await this.model.getUser(user);
    if (userExist.exist === 0) {
      return false;
    }
    return true;
  }
}