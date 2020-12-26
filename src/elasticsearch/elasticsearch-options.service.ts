import {Inject} from '@nestjs/common';
import {ConfigType} from '@nestjs/config';
import {
  ElasticsearchModuleOptions,
  ElasticsearchOptionsFactory,
} from '@nestjs/elasticsearch';
import elasticsearchConfig from './elasticsearch.config';

export class ElasticsearchOptionsService
  implements ElasticsearchOptionsFactory {
  constructor(
    @Inject(elasticsearchConfig.KEY)
    private configService: ConfigType<typeof elasticsearchConfig>,
  ) {}

  createElasticsearchOptions(): ElasticsearchModuleOptions {
    return {
      nodes: this.configService.nodeUri,
    };
  }
}
