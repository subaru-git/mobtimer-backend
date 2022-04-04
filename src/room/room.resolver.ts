import { Query, Resolver } from '@nestjs/graphql';
import { Room } from './room.models';
import { RoomService } from './room.service';

@Resolver()
export class RoomResolver {
  constructor(private roomService: RoomService) {}
  @Query(() => [Room], { nullable: 'items' })
  findAll() {
    return this.roomService.findAll();
  }
}
