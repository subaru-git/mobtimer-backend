import { Injectable } from '@nestjs/common';
import { Room } from './room.models';
import { PrismaService } from '../prisma.service';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Room[]> {
    return this.prisma.room.findMany();
  }
  async find(name: string): Promise<Room> {
    return this.prisma.room.findUnique({ where: { name } });
  }

  createRoom = (name: string) => {
    return this.prisma.room.create({ data: { name } });
  };
}
