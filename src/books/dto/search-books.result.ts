import {ObjectType} from '@nestjs/graphql';
import {SearchResultFactory} from '../../search/search-result.factory';
import {Book} from '../entity/book.entity';
import {SearchBooksQuery} from './search-books.args';

@ObjectType()
export class SearchBooksResult extends SearchResultFactory(
  Book,
  SearchBooksQuery,
  'SearchBooks',
) {}
