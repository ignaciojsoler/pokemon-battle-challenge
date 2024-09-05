import { Pokemon } from "src/pokemon/entities/pokemon.entity";

export function determineFasterPokemon(
    firstPokemon: Pokemon, 
    secondPokemon: Pokemon
): [Pokemon, Pokemon] {
  let faster = firstPokemon.speed > secondPokemon.speed ? firstPokemon : secondPokemon;
  let slower = faster === firstPokemon ? secondPokemon : firstPokemon;

  if (firstPokemon.speed === secondPokemon.speed) {
    faster = firstPokemon.attack > secondPokemon.attack ? firstPokemon : secondPokemon;
    slower = faster === firstPokemon ? secondPokemon : firstPokemon;
  }

  return [faster, slower];
}

export function applyDamage(
    attacker: Pokemon, 
    defender: Pokemon
): void {
  const damage = Math.max(attacker.attack - defender.defense, 1);
  defender.hp -= damage;
}

export function logTurn({
    attacker, 
    defender, 
    turnNumber
}: {
    attacker: Pokemon;
    defender: Pokemon;
    turnNumber: number;
}): void {
  console.log(`Turn ${turnNumber}:`);
  console.log(`${attacker.name} attacks ${defender.name}`);
  console.log(`${defender.name} has ${defender.hp} HP remaining\n`);
}
