import {ObjectType} from '@nestjs/graphql';
import {SearchResultFactory} from '../../search/search-result.factory';
import {SearchMixedUnion} from '../entity/mixed-search-union.entity';
import {SearchMixedQuery} from './search-mixed.args';

@ObjectType()
export class SearchMixedResult extends SearchResultFactory(
  SearchMixedUnion,
  SearchMixedQuery,
  'SearchMixed',
) {}
