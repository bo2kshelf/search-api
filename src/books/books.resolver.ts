import {
  Args,
  Directive,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {BooksService} from './books.service';
import {SearchBooksArgs} from './dto/search-books.args';
import {SearchBooksResult} from './dto/search-books.result';
import {Book} from './entity/book.entity';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private bookService: BooksService) {}

  @ResolveField(() => ID)
  @Directive('@external')
  id(@Parent() {_id}: {_id: string}) {
    return _id;
  }

  @Query(() => SearchBooksResult, {nullable: false})
  async searchBooks(
    @Args({type: () => SearchBooksArgs})
    {query, ...connArgs}: SearchBooksArgs,
  ) {
    return this.bookService.search(query, connArgs);
  }
}
