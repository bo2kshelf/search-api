import {ArgsType, Field, InputType, ObjectType} from '@nestjs/graphql';
import {RequiredPaginationArgs} from '../../paginate/dto/required-pagination.argstype';

@InputType()
@ObjectType('SearchSeriesResultPageInfoQuery')
export class SearchSeriesQuery {
  @Field({nullable: true})
  title?: string;
}

@ArgsType()
export class SearchSeriesArgs extends RequiredPaginationArgs {
  @Field(() => SearchSeriesQuery)
  query!: SearchSeriesQuery;
}
