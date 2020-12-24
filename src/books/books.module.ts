import {Module} from '@nestjs/common';
import {ObjectIdScalar} from '../scalar/objectid.scalar';
import {BooksResolver} from './books.resolver';
import {BooksService} from './books.service';

@Module({
  providers: [ObjectIdScalar, BooksService, BooksResolver],
  exports: [BooksService],
})
export class BooksModule {}
