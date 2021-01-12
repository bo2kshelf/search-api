import {Type} from '@nestjs/common';
import {Field, Int, ObjectType} from '@nestjs/graphql';
import * as Relay from 'graphql-relay';

export function SearchResultFactory<Entity, Query>(
  entityRef: Type<Entity>,
  queryRef: Type<Query>,
  prefix: string,
): any {
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

    @Field(() => queryRef, {nullable: false})
    query!: Query;
  }

  @ObjectType(`${prefix}ResultEdgeType`)
  abstract class Edge implements Relay.Edge<Entity> {
    @Field(() => entityRef)
    node!: Entity;

    @Field((_type) => String)
    cursor!: Relay.ConnectionCursor;
  }

  @ObjectType(`${prefix}Result`, {isAbstract: true})
  abstract class Connection implements Relay.Connection<Entity> {
    @Field(() => Aggregate)
    aggregate!: Aggregate;

    @Field(() => PageInfo)
    pageInfo!: Relay.PageInfo;

    @Field(() => [Edge])
    edges!: Relay.Edge<Entity>[];
  }

  return Connection;
}
