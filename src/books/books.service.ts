import { Injectable, HttpException } from '@nestjs/common';
import { BOOKS } from '../mocks/books.mock';

@Injectable()
export class BooksService {
  books = BOOKS;

  getBooks(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.books);
    });
  }

  getBook(bookID: number): Promise<any> {
    console.log(bookID);
    return new Promise(resolve => {
      const book = this.books.find(book => book.id === bookID);
      if (!book) {
        throw new HttpException('Book does not exist!', 404);
      }
      resolve(book);
    });
  }

  addBook(book): Promise<any> {
    console.log(book);
    return new Promise(resolve => {
      this.books.push(book);
      resolve(this.books);
    });
  }

  deleteBook(bookID: number): Promise<any> {
    return new Promise(resolve => {
      let index = this.books.findIndex(book => book.id === bookID);
      if (index === -1) {
        throw new HttpException('Book does not exist!', 404);
      }
      this.books.splice(1, index);
      resolve(this.books);
    });
  }
}
