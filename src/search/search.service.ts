import {Inject, Injectable} from '@nestjs/common';
import {ConfigType} from '@nestjs/config';
import {ElasticsearchService} from '@nestjs/elasticsearch';
import * as Relay from 'graphql-relay';
import {Author} from '../authors/entity/authors.entity';
import {Book} from '../books/entity/book.entity';
import elasticsearchConfig from '../elasticsearch/elasticsearch.config';
import {RequiredPaginationArgs} from '../paginate/dto/required-pagination.argstype';
import {PaginateService} from '../paginate/paginate.service';
import {Series} from '../series/entity/series.entity';

@Injectable()
export class SearchService {
  constructor(
    private readonly elasticsearchService: ElasticsearchService,
    private readonly paginateService: PaginateService,
    @Inject(elasticsearchConfig.KEY)
    private configService: ConfigType<typeof elasticsearchConfig>,
  ) {}

  getTypeFromIndex(index: string) {
    switch (index) {
      case this.configService.booksIndex:
        return Book.name;
      case this.configService.authorsIndex:
        return Author.name;
      case this.configService.seriesIndex:
        return Series.name;
      default:
        return null;
    }
  }

  async paginateSearch<Query>({
    index,
    body,
    query,
    paginateArgs,
  }: {
    index: string | string[];
    paginateArgs: RequiredPaginationArgs;
    query: Query;
    body: any;
  }) {
    const {size, from} = this.paginateService.getPagingParameters(paginateArgs);

    const {
      body: {
        hits: {
          hits,
          total: {value: count},
        },
      },
    } = await this.elasticsearchService.search({
      index,
      size,
      from,
      _source: ['_id'],
      body,
    });

    const {pageInfo, edges} = Relay.connectionFromArraySlice<{
      _id: string;
      _union: string | null;
    }>(
      hits.map(({_index, ...rest}: {_index: string}) => ({
        _index,
        _union: this.getTypeFromIndex(_index),
        ...rest,
      })),
      paginateArgs,
      {arrayLength: count, sliceStart: from || 0},
    );

    return {
      edges,
      pageInfo: {
        ...pageInfo,
        query,
      },
      aggregate: {count},
    };
  }
}
