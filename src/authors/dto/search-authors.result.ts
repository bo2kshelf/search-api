import {ObjectType} from '@nestjs/graphql';
import {SearchResultFactory} from '../../search/search-result.factory';
import {Author} from '../entity/authors.entity';

@ObjectType()
export class SearchAuthorsResult extends SearchResultFactory(
  Author,
  'SearchAuthors',
) {}
