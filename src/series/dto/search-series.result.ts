import {ObjectType} from '@nestjs/graphql';
import {SearchResultFactory} from '../../search/search-result.factory';
import {Series} from '../entity/series.entity';
import {SearchSeriesQuery} from './search-series.args';

@ObjectType()
export class SearchSeriesResult extends SearchResultFactory(
  Series,
  SearchSeriesQuery,
  'SearchSeries',
) {}
