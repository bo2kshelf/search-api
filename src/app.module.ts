import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {ElasticsearchModule} from '@nestjs/elasticsearch';
import {GraphQLFederationModule} from '@nestjs/graphql';
import {BooksModule} from './books/books.module';
import {ElasticsearchOptionsService} from './elasticsearch/elasticsearch-options.service';
import elasticsearchConfig from './elasticsearch/elasticsearch.config';

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
  ],
})
export class AppModule {}
