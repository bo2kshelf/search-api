import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import elasticsearchConfig from '../elasticsearch/elasticsearch.config';
import {SearchModule} from '../search/search.module';
import {MixedSearchResolver} from './mixed.resolver';
import {MixedSearchService} from './mixed.service';

@Module({
  imports: [ConfigModule.forFeature(elasticsearchConfig), SearchModule],
  providers: [MixedSearchService, MixedSearchResolver],
  exports: [MixedSearchService],
})
export class MixedSearchModule {}
