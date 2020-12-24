import * as Relay from 'graphql-relay';
import {RequiredPaginationArgs} from './dto/required-pagination.argstype';

export type PagingMeta =
  | {pagingType: 'forward'; after?: string; first: number}
  | {pagingType: 'backward'; before?: string; last: number}
  | {pagingType: 'none'};

export function getMeta(args: RequiredPaginationArgs): PagingMeta {
  const {first = 0, last = 0, after, before} = args;

  if (Boolean(first) || Boolean(after))
    return {pagingType: 'forward', after, first};
  else if (Boolean(last) || Boolean(before))
    return {pagingType: 'backward', before, last};
  else return {pagingType: 'none'};
}

export function getPagingParameters(meta: PagingMeta) {
  switch (meta.pagingType) {
    case 'forward': {
      return {
        size: meta.first,
        from: meta.after ? Relay.cursorToOffset(meta.after) + 1 : 0,
      };
    }
    case 'backward': {
      const {last, before} = meta;
      let size = last;
      let from = Relay.cursorToOffset(before!) - last;

      if (from < 0) {
        size = Math.max(last + from, 0);
        from = 0;
      }

      return {from, size};
    }
    default:
      return {};
  }
}
