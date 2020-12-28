import {createUnionType, Union} from '@nestjs/graphql';
import {Author} from '../../authors/entity/authors.entity';
import {Book} from '../../books/entity/book.entity';
import {Series} from '../../series/entity/series.entity';

export const MixedSearchUnion: Union<[Book, Author, Series]> = createUnionType({
  name: 'MixedSearchUnion',
  types: () => [Book, Author, Series],
  resolveType(value) {
    switch (value._union) {
      case Book.name:
        return Book;
      case Author.name:
        return Author;
      case Series.name:
        return Series;
      default:
        return null;
    }
  },
});
