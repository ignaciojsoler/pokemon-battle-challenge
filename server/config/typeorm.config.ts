import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'sqlite',
  database: 'database/database.sqlite',
  entities: ['src/**/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*{.ts,.js}'],
});
