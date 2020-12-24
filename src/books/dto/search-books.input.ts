import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class SearchBooksInput {
  @Field({nullable: true})
  title?: string;
}
