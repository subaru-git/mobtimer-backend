import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomResolver } from './room.resolver';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [RoomService, RoomResolver, PrismaService],
})
export class RoomModule {}
