import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Room {
  @Field()
  name: string;
}
