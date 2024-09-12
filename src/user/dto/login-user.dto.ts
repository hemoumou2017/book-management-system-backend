/*
 * @Author: 何欣 hexing@qq.com
 * @Date: 2024-09-12 09:44:23
 * @LastEditors: 何欣 hexing@qq.com
 * @LastEditTime: 2024-09-12 09:45:35
 * @FilePath: /nest学习/book-management-system-backend/src/user/dto/login-user.dto.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IsNotEmpty, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty({ message: 'Username is required' })
  username: string;

  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;
}
