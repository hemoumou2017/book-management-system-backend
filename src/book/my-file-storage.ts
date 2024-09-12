/*
 * @Author: 何欣 hexing@qq.com
 * @Date: 2024-09-12 10:49:45
 * @LastEditors: 何欣 hexing@qq.com
 * @LastEditTime: 2024-09-12 10:52:06
 * @FilePath: /nest学习/book-management-system-backend/src/book/my-file-storage.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as multer from 'multer';
import * as fs from 'fs';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    try {
      fs.mkdirSync('uploads');
    } catch (error) {}
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix =
      new Date().getTime() +
      '-' +
      Math.round(Math.random() * 1e9) +
      '-' +
      file.originalname;
    cb(null, uniqueSuffix);
  },
});

export { storage };
