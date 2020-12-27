import {Args, Query, Resolver} from '@nestjs/graphql';
import {MixedSearchArgs} from './dto/mixed-search.args';
import {MixedSearchResult} from './dto/mixed-search.result';
import {MixedSearchService} from './mixed.service';

@Resolver()
export class MixedSearchResolver {
  constructor(private mixedSearchService: MixedSearchService) {}

  @Query(() => MixedSearchResult, {nullable: false})
  async mixedSearch(
    @Args({type: () => MixedSearchArgs})
    {query, ...connArgs}: MixedSearchArgs,
  ) {
    return this.mixedSearchService.search(query, connArgs);
  }
}
