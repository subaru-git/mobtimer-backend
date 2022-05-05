import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class RoomInput {
  @Field()
  name: string;
  @Field({ nullable: true })
  topic: string;
  @Field()
  worktime: number;
  @Field()
  breaktime: number;
  @Field()
  breakcount: number;
  @Field(() => [String])
  members: string[];
  @Field(() => Date, { nullable: true })
  maintimer: Date;
  @Field(() => Date)
  updatedAt: Date;
  @Field(() => Date)
  createdAt: Date;
}

@ObjectType()
export class Room {
  @Field()
  name: string;
  @Field({ nullable: true })
  topic: string;
  @Field()
  worktime: number;
  @Field()
  breaktime: number;
  @Field()
  breakcount: number;
  @Field(() => [String])
  members: string[];
  @Field(() => Date, { nullable: true })
  maintimer: Date;
  @Field(() => Date)
  updatedAt: Date;
  @Field(() => Date)
  createdAt: Date;
}
