import {Type} from '@nestjs/common';
import {Field, Int, ObjectType} from '@nestjs/graphql';
import * as Relay from 'graphql-relay';

export function SearchResultFactory<T>(classRef: Type<T>, prefix: string): any {
  @ObjectType(`${prefix}ResultAggregate`)
  abstract class Aggregate {
    @Field((_type) => Int)
    count!: number;
  }

  @ObjectType(`${prefix}ResultPageInfo`)
  abstract class PageInfo implements Relay.PageInfo {
    @Field((_type) => Boolean, {nullable: true})
    hasNextPage?: boolean | null;

    @Field((_type) => Boolean, {nullable: true})
    hasPreviousPage?: boolean | null;

    @Field((_type) => String, {nullable: true})
    startCursor?: Relay.ConnectionCursor | null;

    @Field((_type) => String, {nullable: true})
    endCursor?: Relay.ConnectionCursor | null;
  }

  @ObjectType(`${prefix}ResultEdgeType`)
  abstract class Edge implements Relay.Edge<T> {
    @Field(() => classRef)
    node!: T;

    @Field((_type) => String)
    cursor!: Relay.ConnectionCursor;
  }

  @ObjectType(`${prefix}Result`, {isAbstract: true})
  abstract class Connection implements Relay.Connection<T> {
    @Field(() => Aggregate)
    aggregate!: Aggregate;

    @Field(() => PageInfo)
    pageInfo!: Relay.PageInfo;

    @Field(() => [Edge])
    edges!: Relay.Edge<T>[];
  }

  return Connection;
}
