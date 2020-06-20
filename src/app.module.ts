import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { BooksModule } from './books/books.module';

/**
 *   @desc   The @Module() decorator provides metadata that Nest makes use of to organize the application structure.
 *           app.module.ts serves as the root module of the app
 */
@Module({
  imports: [
    // In order to serve static content for a SPA, we can use the ServeStaticModule to hook up VueJS
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client/public/'),
    }),
    BooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
