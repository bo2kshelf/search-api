import {ArgsType, Field, InputType} from '@nestjs/graphql';
import {RequiredPaginationArgs} from '../../paginate/dto/required-pagination.argstype';

@InputType()
export class SearchSeriesQueryInput {
  @Field({nullable: true})
  title?: string;
}

@ArgsType()
export class SearchSeriesArgs extends RequiredPaginationArgs {
  @Field(() => SearchSeriesQueryInput)
  query!: SearchSeriesQueryInput;
}
