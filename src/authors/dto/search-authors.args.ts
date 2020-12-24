import {ArgsType, Field, InputType} from '@nestjs/graphql';
import {RequiredPaginationArgs} from '../../paginate/dto/required-pagination.argstype';

@InputType()
export class SearchAuthorsQueryInput {
  @Field({nullable: true})
  name?: string;
}

@ArgsType()
export class SearchAuthorsArgs extends RequiredPaginationArgs {
  @Field(() => SearchAuthorsQueryInput)
  query!: SearchAuthorsQueryInput;
}
