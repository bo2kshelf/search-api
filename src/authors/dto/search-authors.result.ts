import {ObjectType} from '@nestjs/graphql';
import {SearchResultFactory} from '../../search/search-result.factory';
import {Author} from '../entity/authors.entity';
import {SearchAuthorsQuery} from './search-authors.args';

@ObjectType()
export class SearchAuthorsResult extends SearchResultFactory(
  Author,
  SearchAuthorsQuery,
  'SearchAuthors',
) {}
