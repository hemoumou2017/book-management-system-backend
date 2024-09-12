/*
 * @Author: 何欣 hexing@qq.com
 * @Date: 2024-09-11 17:38:49
 * @LastEditors: 何欣 hexing@qq.com
 * @LastEditTime: 2024-09-11 17:55:12
 * @FilePath: /nest学习/book-management-system-backend/src/user/user.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [
    DbModule.register({
      path: 'users.json',
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
