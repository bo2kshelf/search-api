import {ObjectType} from '@nestjs/graphql';
import {SearchResultFactory} from '../../search/search-result.factory';
import {SearchMixedUnion} from '../entity/mixed-search-union.entity';

@ObjectType()
export class SearchMixedResult extends SearchResultFactory(
  SearchMixedUnion,
  'SearchMixed',
) {}
