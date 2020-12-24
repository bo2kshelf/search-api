import {ObjectType} from '@nestjs/graphql';
import {SearchResultFactory} from '../../paginate/search-result.factory';
import {Book} from '../entity/book.entity';

@ObjectType()
export class SearchBooksResult extends SearchResultFactory(
  Book,
  'SearchBooks',
) {}
