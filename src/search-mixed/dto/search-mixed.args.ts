import {ArgsType, Field} from '@nestjs/graphql';
import {RequiredPaginationArgs} from '../../paginate/dto/required-pagination.argstype';

@ArgsType()
export class SearchMixedArgs extends RequiredPaginationArgs {
  @Field(() => String)
  query!: string;
}
