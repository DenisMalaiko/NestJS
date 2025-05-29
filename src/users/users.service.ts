import { Injectable } from '@nestjs/common';
import { User } from '../../interfaces/User';
import { CreateUserDto } from '../../models/create-user.dto';

@Injectable()
export class UsersService {
  users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 35 },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', age: 28 },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', age: 32 },
  ];

  getUsers(): User[] {
    return this.users;
  }

  createUser(createUserDto: CreateUserDto): User[] {
    this.users.push(createUserDto);
    return this.users;
  }
}
