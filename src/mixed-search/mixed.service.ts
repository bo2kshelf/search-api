import {Inject, Injectable} from '@nestjs/common';
import {ConfigType} from '@nestjs/config';
import elasticsearchConfig from '../elasticsearch/elasticsearch.config';
import {RequiredPaginationArgs} from '../paginate/dto/required-pagination.argstype';
import {SearchService} from '../search/search.service';

@Injectable()
export class MixedSearchService {
  constructor(
    @Inject(elasticsearchConfig.KEY)
    private readonly configService: ConfigType<typeof elasticsearchConfig>,

    private readonly searchService: SearchService,
  ) {}

  async search(query: string, paginateArgs: RequiredPaginationArgs) {
    return this.searchService.paginatedSearch(
      [
        this.configService.booksIndex,
        this.configService.authorsIndex,
        this.configService.seriesIndex,
      ],
      {
        match: {
          title: query,
        },
      },
      paginateArgs,
    );
  }
}
