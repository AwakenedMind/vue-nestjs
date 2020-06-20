import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  Delete,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';

/**
 * @desc  Pass BookService into the BooksController following dependency injection design pattern
 */

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  // Get every book from the db
  @Get()
  async getBooks() {
    const books = await this.booksService.getBooks();
    return books;
  }

  // Get a particular book from the db using a book id
  @Get(':bookID')
  async getBook(@Param('bookID') bookID: string) {
    console.log(bookID);
    const book = await this.booksService.getBook(Number(bookID));
    return book;
  }

  // Add a book to the db
  @Post()
  async addBook(@Body() createBookDTO: CreateBookDTO) {
    const book = await this.booksService.addBook(createBookDTO);
    return book;
  }

  // Delete a book from the db using a book id
  @Delete()
  async deleteBook(@Query('bookID') bookID: string) {
    const books = await this.booksService.deleteBook(Number(bookID));
    return books;
  }
}
