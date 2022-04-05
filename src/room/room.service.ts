import { Injectable } from '@nestjs/common';
import { Room } from './room.models';

@Injectable()
export class RoomService {
  private readonly rooms: Room[] = [
    { name: 'room1' },
    { name: 'room2' },
    { name: 'room3' },
  ];

  findAll(): Room[] {
    return this.rooms;
  }
}
