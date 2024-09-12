/*
 * @Author: 何欣 hexing@qq.com
 * @Date: 2024-09-12 09:48:10
 * @LastEditors: 何欣 hexing@qq.com
 * @LastEditTime: 2024-09-12 17:47:36
 * @FilePath: /nest学习/book-management-system-backend/src/book/book.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseInterceptors,
  BadRequestException,
  UploadedFile,
  Query,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import * as path from 'path';
import { FileInterceptor } from '@nestjs/platform-express';
import { storage } from './my-file-storage';
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('list')
  async list(@Query('name') name: string) {
    return await this.bookService.list(name);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.bookService.findById(+id);
  }

  @Post('create')
  async create(@Body() createBookDto: CreateBookDto) {
    return await this.bookService.create(createBookDto);
  }

  @Put('update')
  async update(@Body() updateBookDto: UpdateBookDto) {
    return await this.bookService.update(updateBookDto);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return await this.bookService.delete(+id);
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      dest: 'uploads',
      storage: storage,
      limits: { fileSize: 1024 * 1024 * 3 },
      fileFilter(req, file, cb) {
        const extname = path.extname(file.originalname);
        if (['.jpg', '.png', '.jpeg'].includes(extname)) {
          cb(null, true);
        } else {
          cb(new BadRequestException('请上传图片格式的文件'), false);
        }
      },
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return file.path;
  }
}
