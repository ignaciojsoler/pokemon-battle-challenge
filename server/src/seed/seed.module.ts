import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pokemon])
  ],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
