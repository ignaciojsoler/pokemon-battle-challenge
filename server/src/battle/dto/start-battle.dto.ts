import { IsNotEmpty, IsString } from "class-validator";

export class StartBattleDto {
  @IsString()
  @IsNotEmpty()
  firstPokemonId: string;
  @IsString()
  @IsNotEmpty()
  secondPokemonId: string;
}
