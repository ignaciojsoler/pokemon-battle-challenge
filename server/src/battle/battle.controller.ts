import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BattleService } from './battle.service';
import { StartBattleDto } from './dto/start-battle.dto';

@Controller('battle')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  @Post()
  startBattle(@Body() startBattleDto: StartBattleDto) {
    return this.battleService.startBattle(startBattleDto);
  } 
}
