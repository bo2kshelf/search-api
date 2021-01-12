import {ArgsType, Field, InputType, ObjectType} from '@nestjs/graphql';
import {RequiredPaginationArgs} from '../../paginate/dto/required-pagination.argstype';

@InputType()
@ObjectType('SearchBooksResultPageInfoQuery')
export class SearchBooksQuery {
  @Field({nullable: false})
  title!: string;
}

@ArgsType()
export class SearchBooksArgs extends RequiredPaginationArgs {
  @Field(() => SearchBooksQuery)
  query!: SearchBooksQuery;
}
