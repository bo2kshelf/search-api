import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {ElasticsearchModule} from '@nestjs/elasticsearch';
import {ElasticsearchOptionsService} from '../elasticsearch/elasticsearch-options.service';
import elasticsearchConfig from '../elasticsearch/elasticsearch.config';
import {SearchService} from './search.service';

@Module({
  imports: [
    ConfigModule.forFeature(elasticsearchConfig),
    ElasticsearchModule.registerAsync({
      imports: [ConfigModule.forFeature(elasticsearchConfig)],
      useClass: ElasticsearchOptionsService,
    }),
  ],
  providers: [SearchService],
  exports: [SearchService],
})
export class SearchModule {}
