import { Pool, RowDataPacket } from 'mysql2/promise';
import User from '../interfaces/user.interface';

interface UserExist{
  exist: number
}

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

  public async getUser(user: User): Promise<UserExist[]> {
    const { username, password } = user;
    const [result] = await this.connection.execute<RowDataPacket[] & UserExist[]>(
      `SELECT EXISTS
      (SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?)
      as exist;`,
      [username, password],
    ); 
    return result;
  }
}