import {ArgsType, Field, InputType, ObjectType} from '@nestjs/graphql';
import {RequiredPaginationArgs} from '../../paginate/dto/required-pagination.argstype';

@InputType()
@ObjectType('SearchAuthorsResultPageInfoQuery')
export class SearchAuthorsQuery {
  @Field({nullable: true})
  name?: string;
}

@ArgsType()
export class SearchAuthorsArgs extends RequiredPaginationArgs {
  @Field(() => SearchAuthorsQuery)
  query!: SearchAuthorsQuery;
}
