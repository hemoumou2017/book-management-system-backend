/*
 * @Author: 何欣 hexing@qq.com
 * @Date: 2024-09-11 17:38:49
 * @LastEditors: 何欣 hexing@qq.com
 * @LastEditTime: 2024-09-12 09:46:37
 * @FilePath: /nest学习/book-management-system-backend/src/user/user.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DbService } from 'src/db/db.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from './entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
  @Inject()
  dbService: DbService;

  async register(registerUserDto: RegisterUserDto) {
    const users: User[] = await this.dbService.read();
    const foundUser = users.find(
      (item) => item.username === registerUserDto.username,
    );
    if (foundUser) {
      throw new BadRequestException('Username already exists');
    }
    const user = new User();
    user.username = registerUserDto.username;
    user.password = registerUserDto.password;
    users.push(user);
    await this.dbService.write(users);
    return user;
  }

  async login(loginUserDto: LoginUserDto) {
    const users: User[] = await this.dbService.read();
    const foundUser = users.find(
      (item) => item.username === loginUserDto.username,
    );
    if (!foundUser) {
      throw new BadRequestException('Username not found');
    }
    if (foundUser.password !== loginUserDto.password) {
      throw new BadRequestException('Password is incorrect');
    }

    return foundUser;
  }
}
