import {ArgsType, Field, InputType, ObjectType} from '@nestjs/graphql';
import {RequiredPaginationArgs} from '../../paginate/dto/required-pagination.argstype';

@InputType()
@ObjectType('SearchMixedResultPageInfoQuery')
export class SearchMixedQuery {
  @Field({nullable: true})
  query!: string;
}

@ArgsType()
export class SearchMixedArgs extends RequiredPaginationArgs {
  @Field(() => SearchMixedQuery)
  query!: SearchMixedQuery;
}
