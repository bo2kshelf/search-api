import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {ElasticsearchModule} from '@nestjs/elasticsearch';
import {GraphQLFederationModule} from '@nestjs/graphql';
import {AuthorsModule} from './authors/authors.module';
import {BooksModule} from './books/books.module';
import {ElasticsearchOptionsService} from './elasticsearch/elasticsearch-options.service';
import elasticsearchConfig from './elasticsearch/elasticsearch.config';
import {SearchMixedModule} from './search-mixed/search-mixed.module';
import {SeriesModule} from './series/series.module';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
    }),
    ElasticsearchModule.registerAsync({
      imports: [ConfigModule.forFeature(elasticsearchConfig)],
      useClass: ElasticsearchOptionsService,
    }),
    BooksModule,
    AuthorsModule,
    SeriesModule,
    SearchMixedModule,
  ],
})
export class AppModule {}
