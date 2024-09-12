/*
 * @Author: 何欣 hexing@qq.com
 * @Date: 2024-09-12 09:48:10
 * @LastEditors: 何欣 hexing@qq.com
 * @LastEditTime: 2024-09-12 09:53:44
 * @FilePath: /nest学习/book-management-system-backend/src/book/dto/create-book.dto.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsNotEmpty({ message: 'Author is required' })
  author: string;

  @IsNotEmpty({ message: 'Year of publication is required' })
  yearOfPublication: number;

  @IsNotEmpty({ message: 'ISBN is required' })
  isbn: string;

  @IsNotEmpty({ message: 'Description is required' })
  description: string;

  @IsNotEmpty({ message: 'Price is required' })
  price: number;

  @IsNotEmpty({ message: 'cover is required' })
  cover: string;
}
