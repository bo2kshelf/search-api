import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import elasticsearchConfig from '../elasticsearch/elasticsearch.config';
import {ObjectIdScalar} from '../scalar/objectid.scalar';
import {SearchModule} from '../search/search.module';
import {SeriesResolver} from './series.resolver';
import {SeriesService} from './series.service';

@Module({
  imports: [ConfigModule.forFeature(elasticsearchConfig), SearchModule],
  providers: [ObjectIdScalar, SeriesService, SeriesResolver],
  exports: [SeriesService],
})
export class SeriesModule {}
