import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { BattleModule } from './battle/battle.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database/database.sqlite',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    PokemonModule, 
    BattleModule, SeedModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
