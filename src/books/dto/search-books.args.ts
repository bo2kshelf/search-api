import {ArgsType, Field, InputType} from '@nestjs/graphql';
import {RequiredPaginationArgs} from '../../paginate/dto/required-pagination.argstype';

@InputType()
export class SearchBooksQueryInput {
  @Field({nullable: true})
  title?: string;
}

@ArgsType()
export class SearchBooksArgs extends RequiredPaginationArgs {
  @Field(() => SearchBooksQueryInput)
  query!: SearchBooksQueryInput;
}
