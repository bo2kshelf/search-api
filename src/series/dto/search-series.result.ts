import {ObjectType} from '@nestjs/graphql';
import {SearchResultFactory} from '../../search/search-result.factory';
import {Series} from '../entity/series.entity';

@ObjectType()
export class SearchSeriesResult extends SearchResultFactory(
  Series,
  'SearchSeries',
) {}
