import {Injectable} from '@nestjs/common';
import {ElasticsearchService} from '@nestjs/elasticsearch';
import * as Relay from 'graphql-relay';
import {RequiredPaginationArgs} from '../paginate/dto/required-pagination.argstype';
import {PaginateService} from '../paginate/paginate.service';

@Injectable()
export class SearchService {
  constructor(
    private readonly elasticsearchService: ElasticsearchService,
    private readonly paginateService: PaginateService,
  ) {}

  async paginatedSearch(
    index: string | string[],
    query: any,
    connArgs: RequiredPaginationArgs,
  ) {
    const {size, from} = this.paginateService.getPagingParameters(connArgs);

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
      body: {query},
    });

    const connection = Relay.connectionFromArraySlice<{_id: string}>(
      hits,
      connArgs,
      {arrayLength: count, sliceStart: from || 0},
    );

    return {...connection, aggregate: {count}};
  }
}
