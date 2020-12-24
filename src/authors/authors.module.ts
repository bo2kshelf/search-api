import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import elasticsearchConfig from '../elasticsearch/elasticsearch.config';
import {ObjectIdScalar} from '../scalar/objectid.scalar';
import {SearchModule} from '../search/search.module';
import {AuthorResolver} from './authors.resolver';
import {AuthorsService} from './authors.service';

@Module({
  imports: [ConfigModule.forFeature(elasticsearchConfig), SearchModule],
  providers: [ObjectIdScalar, AuthorsService, AuthorResolver],
  exports: [AuthorsService],
})
export class AuthorsModule {}
