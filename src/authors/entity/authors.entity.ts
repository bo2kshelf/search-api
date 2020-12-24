import {Directive, ObjectType} from '@nestjs/graphql';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Author {}
