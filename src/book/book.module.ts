/*
 * @Author: 何欣 hexing@qq.com
 * @Date: 2024-09-12 09:48:10
 * @LastEditors: 何欣 hexing@qq.com
 * @LastEditTime: 2024-09-12 09:58:30
 * @FilePath: /nest学习/book-management-system-backend/src/book/book.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [
    DbModule.register({
      path: 'books.json',
    }),
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
