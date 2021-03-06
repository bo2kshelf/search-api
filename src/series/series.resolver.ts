import {
  Args,
  Directive,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {SearchSeriesArgs} from './dto/search-series.args';
import {SearchSeriesResult} from './dto/search-series.result';
import {Series} from './entity/series.entity';
import {SeriesService} from './series.service';

@Resolver(() => Series)
export class SeriesResolver {
  constructor(private seriesService: SeriesService) {}

  @ResolveField(() => ID)
  @Directive('@external')
  id(@Parent() {_id}: {_id: string}) {
    return _id;
  }

  @Query(() => SearchSeriesResult, {nullable: false})
  async searchSeries(
    @Args({type: () => SearchSeriesArgs})
    {query, ...connArgs}: SearchSeriesArgs,
  ) {
    return this.seriesService.search(query, connArgs);
  }
}
