import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Room } from './room.models';
import { RoomService } from './room.service';
const pubSub = new PubSub();

@Resolver()
export class RoomResolver {
  constructor(private roomService: RoomService) {}
  @Query(() => [Room], { nullable: 'items' })
  async findAll() {
    return await this.roomService.findAll();
  }

  @Mutation(() => Room)
  async createRoom(@Args('name') name: string) {
    const newRoom = await this.roomService.createRoom(name);
    pubSub.publish('roomAdded', { roomAdded: newRoom });
    return newRoom;
  }

  @Subscription(() => Room)
  async roomAdded() {
    return pubSub.asyncIterator('roomAdded');
  }
}
