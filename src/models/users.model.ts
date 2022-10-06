import { Pool } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
    
  public async createUser(user: User): Promise<void> {
    const { username, classe, level, password } = user;
    this.connection.execute(`INSERT INTO Trybesmith.Users (username, classe, level, password)
     VALUES (?,?,?,?)`, [username, classe, level, password]);
  }
}