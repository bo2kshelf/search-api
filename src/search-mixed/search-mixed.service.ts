import {Inject, Injectable} from '@nestjs/common';
import {ConfigType} from '@nestjs/config';
import elasticsearchConfig from '../elasticsearch/elasticsearch.config';
import {RequiredPaginationArgs} from '../paginate/dto/required-pagination.argstype';
import {SearchService} from '../search/search.service';

@Injectable()
export class SearchMixedService {
  constructor(
    @Inject(elasticsearchConfig.KEY)
    private readonly configService: ConfigType<typeof elasticsearchConfig>,

    private readonly searchService: SearchService,
  ) {}

  async search(query: {query: string}, paginateArgs: RequiredPaginationArgs) {
    return this.searchService.paginateSearch({
      index: [
        this.configService.booksIndex,
        this.configService.authorsIndex,
        this.configService.seriesIndex,
      ],
      paginateArgs,
      query,
      body: {
        query: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          multi_match: {
            fields: ['title', 'name'],
            query: query.query,
          },
        },
      },
    });
  }
}
