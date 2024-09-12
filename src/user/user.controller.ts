/*
 * @Author: 何欣 hexing@qq.com
 * @Date: 2024-09-11 17:38:49
 * @LastEditors: 何欣 hexing@qq.com
 * @LastEditTime: 2024-09-12 09:46:58
 * @FilePath: /nest学习/book-management-system-backend/src/user/user.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(@Body() registerUserDto: RegisterUserDto) {
    console.log(registerUserDto);
    // return 'done';
    return this.userService.register(registerUserDto);
  }

  @Post('login')
  login(@Body() registerUserDto: RegisterUserDto) {
    return this.userService.login(registerUserDto);
  }
}
