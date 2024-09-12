/*
 * @Author: 何欣 hexing@qq.com
 * @Date: 2024-09-12 09:48:10
 * @LastEditors: 何欣 hexing@qq.com
 * @LastEditTime: 2024-09-12 16:51:21
 * @FilePath: /nest学习/book-management-system-backend/src/book/book.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { DbService } from 'src/db/db.service';
import { Book } from './entities/book.entity';
function randomNumber() {
  return Math.floor(Math.random() * 1000000 + 1);
}

@Injectable()
export class BookService {
  @Inject()
  dbService: DbService;

  async list(name: string) {
    const books: Book[] = await this.dbService.read();
    return name
      ? books.filter((book) => {
          return book.name.includes(name);
        })
      : books;
  }

  async findById(id: number) {
    const books: Book[] = await this.dbService.read();
    return books.find((book) => book.id === id);
  }

  async create(createBookDto: CreateBookDto) {
    const books: Book[] = await this.dbService.read();
    const book = new Book();
    book.id = randomNumber();
    book.name = createBookDto.name;
    book.author = createBookDto.author;
    book.yearOfPublication = createBookDto.yearOfPublication;
    book.isbn = createBookDto.isbn;
    book.description = createBookDto.description;
    book.price = createBookDto.price;
    book.cover = createBookDto.cover;
    books.push(book);
    await this.dbService.write(books);
    return books;
  }

  async update(updateBookDto: UpdateBookDto) {
    const books: Book[] = await this.dbService.read();
    const foundBook = books.find((book) => book.id === updateBookDto.id);
    if (!foundBook) {
      throw new BadRequestException('找不到该书籍');
    }
    foundBook.name = updateBookDto.name;
    foundBook.author = updateBookDto.author;
    foundBook.yearOfPublication = updateBookDto.yearOfPublication;
    foundBook.isbn = updateBookDto.isbn;
    foundBook.description = updateBookDto.description;
    foundBook.price = updateBookDto.price;
    foundBook.cover = updateBookDto.cover;
    await this.dbService.write(books);
    return foundBook;
  }

  async delete(id: number) {
    const books: Book[] = await this.dbService.read();
    const foundBookIndex = books.findIndex((book) => book.id === id);
    if (foundBookIndex < 0) {
      throw new BadRequestException('找不到该书籍');
    }
    books.splice(foundBookIndex, 1);
    await this.dbService.write(books);
  }
}
