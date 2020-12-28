import {ArgsType, Field} from '@nestjs/graphql';
import {RequiredPaginationArgs} from '../../paginate/dto/required-pagination.argstype';

@ArgsType()
export class MixedSearchArgs extends RequiredPaginationArgs {
  @Field(() => String)
  query!: string;
}
