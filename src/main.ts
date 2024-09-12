/*
 * @Author: 何欣 hexing@qq.com
 * @Date: 2024-09-11 17:36:45
 * @LastEditors: 何欣 hexing@qq.com
 * @LastEditTime: 2024-09-12 16:15:44
 * @FilePath: /nest学习/book-management-system-backend/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  // 把 uploads 目录设置为静态文件目录
  app.useStaticAssets(join(__dirname, '../uploads'), { prefix: '/uploads' });
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
