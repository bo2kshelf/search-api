import {registerAs} from '@nestjs/config';

export default registerAs('elasticsearch', () => ({
  nodeUri: process.env.ELASTICSEARCH_NODE_URI!,
  booksIndex: process.env.ELASTICSEARCH_BOOKS_INDEX!,
  authorsIndex: process.env.ELASTICSEARCH_AUTHORS_INDEX!,
  seriesIndex: process.env.ELASTICSEARCH_SERIES_INDEX!,
}));
