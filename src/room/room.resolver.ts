import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Room, RoomInput } from './room.models';
import { RoomService } from './room.service';
const pubSub = new PubSub();

@Resolver()
export class RoomResolver {
  constructor(private roomService: RoomService) {}
  @Query(() => [Room], { nullable: 'items' })
  async findAll() {
    return await this.roomService.findAll();
  }
  @Query(() => Room, { nullable: true })
  async find(@Args('name') name: string) {
    return await this.roomService.find(name);
  }

  @Mutation(() => Room)
  async createRoom(@Args('name') name: string) {
    const newRoom = await this.roomService.createRoom(name);
    pubSub.publish('roomUpdated', { roomAdded: newRoom });
    return newRoom;
  }

  @Mutation(() => Room)
  async updateRoom(@Args('room') room: RoomInput) {
    const updatedRoom = await this.roomService.updateRoom(room);
    pubSub.publish('roomUpdated', { roomUpdated: updatedRoom });
    return updatedRoom;
  }

  @Subscription(() => Room, {
    filter: (payload, variables) => payload.roomUpdated.name === variables.name,
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async roomUpdated(@Args('name') _name: string) {
    return pubSub.asyncIterator('roomUpdated');
  }
}
