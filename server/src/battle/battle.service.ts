import { Injectable } from '@nestjs/common';
import { StartBattleDto } from './dto/start-battle.dto';

@Injectable()
export class BattleService {
  startBattle(startBattleDto: StartBattleDto) {
    return startBattleDto;
  }
}
