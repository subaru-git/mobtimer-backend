import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { RoomResolver } from './room.resolver';
import { RoomService } from './room.service';

describe('RoomResolver', () => {
  let resolver: RoomResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomResolver, RoomService, PrismaService],
    }).compile();

    resolver = module.get<RoomResolver>(RoomResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
