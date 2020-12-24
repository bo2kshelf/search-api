import {Injectable} from '@nestjs/common';
import * as Relay from 'graphql-relay';
import {RequiredPaginationArgs} from './dto/required-pagination.argstype';

export type PagingMeta =
  | {pagingType: 'forward'; after?: string; first: number}
  | {pagingType: 'backward'; before?: string; last: number}
  | {pagingType: 'none'};

@Injectable()
export class PaginateService {
  constructor() {}

  getPagingParameters(args: RequiredPaginationArgs) {
    const {first = 0, last = 0, after, before} = args;

    if (Boolean(first) || Boolean(after)) {
      return {
        size: first,
        from: after ? Relay.cursorToOffset(after) + 1 : 0,
      };
    } else if (Boolean(last) || Boolean(before)) {
      const size = last;
      const from = Relay.cursorToOffset(before!) - last;

      if (from < 0) return {size: Math.max(last + from, 0), from: 0};
      else return {from, size};
    } else {
      return {};
    }
  }
}
