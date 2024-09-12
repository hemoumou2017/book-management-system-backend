/*
 * @Author: 何欣 hexing@qq.com
 * @Date: 2024-09-11 17:53:20
 * @LastEditors: 何欣 hexing@qq.com
 * @LastEditTime: 2024-09-11 21:46:20
 * @FilePath: /nest学习/book-management-system-backend/src/db/db.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { DynamicModule, Module } from '@nestjs/common';
import { DbService } from './db.service';

export interface DbModuleOptions {
  path: string;
}

@Module({})
export class DbModule {
  static register(options: DbModuleOptions): DynamicModule {
    return {
      module: DbModule,
      providers: [{ provide: 'OPTIONS', useValue: options }, DbService],
      exports: [DbService],
    };
  }
}
