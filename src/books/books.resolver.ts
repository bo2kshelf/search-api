import {Args, Query, Resolver} from '@nestjs/graphql';
import {BooksService} from './books.service';
import {SearchBooksInput} from './dto/search-books.input';
import {SearchBooksResult} from './dto/search-books.result';
import {Book} from './entity/book.entity';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private bookService: BooksService) {}

  @Query(() => SearchBooksResult, {nullable: false})
  async searchBooks(
    @Args('query', {type: () => SearchBooksInput})
    query: SearchBooksResult,
  ) {
    return this.bookService.search(query);
  }
}
