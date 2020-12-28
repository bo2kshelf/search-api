import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import elasticsearchConfig from '../elasticsearch/elasticsearch.config';
import {SearchModule} from '../search/search.module';
import {SearchMixedResolver} from './search-mixed.resolver';
import {SearchMixedService} from './search-mixed.service';

@Module({
  imports: [ConfigModule.forFeature(elasticsearchConfig), SearchModule],
  providers: [SearchMixedService, SearchMixedResolver],
  exports: [SearchMixedService],
})
export class SearchMixedModule {}
