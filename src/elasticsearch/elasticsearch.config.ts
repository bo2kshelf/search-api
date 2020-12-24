import {registerAs} from '@nestjs/config';

export default registerAs('elasticsearch', () => ({
  nodeUri: process.env.ELASTIC_NODE_URI!,
  booksIndex: 'test.books',
  authorsIndex: 'test.authors',
  seriesIndex: 'test.series',
}));
