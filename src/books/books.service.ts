import {Injectable} from '@nestjs/common';

@Injectable()
export class BooksService {
  constructor() {}

  async search({title}: {title?: string}) {
    return {aggregate: {count: 0}, edges: [], pageInfo: {}};
  }
}
