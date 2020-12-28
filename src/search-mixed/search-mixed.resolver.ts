import {Args, Query, Resolver} from '@nestjs/graphql';
import {SearchMixedArgs} from './dto/search-mixed.args';
import {SearchMixedResult} from './dto/search-mixed.result';
import {SearchMixedService} from './search-mixed.service';

@Resolver()
export class SearchMixedResolver {
  constructor(private mixedSearchService: SearchMixedService) {}

  @Query(() => SearchMixedResult, {nullable: false})
  async searchMixed(
    @Args({type: () => SearchMixedArgs})
    {query, ...connArgs}: SearchMixedArgs,
  ) {
    return this.mixedSearchService.search(query, connArgs);
  }
}
