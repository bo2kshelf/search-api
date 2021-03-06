import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import elasticsearchConfig from '../elasticsearch/elasticsearch.config';
import {SearchModule} from '../search/search.module';
import {BooksResolver} from './books.resolver';
import {BooksService} from './books.service';

@Module({
  imports: [ConfigModule.forFeature(elasticsearchConfig), SearchModule],
  providers: [BooksService, BooksResolver],
  exports: [BooksService],
})
export class BooksModule {}
