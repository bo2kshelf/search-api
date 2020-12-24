import {
  Args,
  Directive,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {ObjectId} from 'mongodb';
import {AuthorsService} from './authors.service';
import {SearchAuthorsArgs} from './dto/search-authors.args';
import {SearchAuthorsResult} from './dto/search-authors.result';
import {Author} from './entity/authors.entity';

@Resolver(() => Author)
export class AuthorResolver {
  constructor(private authorsService: AuthorsService) {}

  @ResolveField(() => ObjectId)
  @Directive('@external')
  id(@Parent() {_id}: {_id: string}) {
    return new ObjectId(_id);
  }

  @Query(() => SearchAuthorsResult, {nullable: false})
  async searchAuthors(
    @Args({type: () => SearchAuthorsArgs})
    {query, ...connArgs}: SearchAuthorsArgs,
  ) {
    return this.authorsService.search(query, connArgs);
  }
}
