import {Directive, Field, ObjectType} from '@nestjs/graphql';
import {ObjectId} from 'mongodb';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Book {
  @Field((_type) => ObjectId)
  @Directive('@external')
  id!: ObjectId;
}
