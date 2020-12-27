import {ObjectType} from '@nestjs/graphql';
import {SearchResultFactory} from '../../search/search-result.factory';
import {MixedSearchUnion} from '../entity/mixed-search-union.entity';

@ObjectType()
export class MixedSearchResult extends SearchResultFactory(
  MixedSearchUnion,
  'MixedSearch',
) {}
