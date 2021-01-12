import {Inject, Injectable} from '@nestjs/common';
import {ConfigType} from '@nestjs/config';
import elasticsearchConfig from '../elasticsearch/elasticsearch.config';
import {RequiredPaginationArgs} from '../paginate/dto/required-pagination.argstype';
import {SearchService} from '../search/search.service';

@Injectable()
export class BooksService {
  constructor(
    @Inject(elasticsearchConfig.KEY)
    private readonly configService: ConfigType<typeof elasticsearchConfig>,

    private readonly searchService: SearchService,
  ) {}

  async search(query: {title?: string}, paginateArgs: RequiredPaginationArgs) {
    return this.searchService.paginateSearch({
      index: this.configService.booksIndex,
      paginateArgs,
      query,
      body: {query: {match: {title: query.title}}},
    });
  }
}
