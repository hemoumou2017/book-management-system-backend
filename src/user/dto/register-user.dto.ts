import { IsNotEmpty, MinLength } from 'class-validator';

/*
 * @Author: 何欣 hexing@qq.com
 * @Date: 2024-09-11 17:41:29
 * @LastEditors: 何欣 hexing@qq.com
 * @LastEditTime: 2024-09-11 17:52:12
 * @FilePath: /nest学习/book-management-system-backend/src/user/dto/register-user.fto.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export class RegisterUserDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  username: string;

  @IsNotEmpty({ message: '密码不能为空' })
  @MinLength(6, { message: '密码不能少于6位' })
  password: string;
}
