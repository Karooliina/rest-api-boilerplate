import { DataSource } from "typeorm";

export const PgDataSource = new DataSource({
  type: "postgres",
  host: String(process.env.DB_HOST),
  port: 5432,
  username: String(process.env.POSTGRES_USER),
  password: String(process.env.POSTGRES_PASSWORD),
  database: String(process.env.POSTGRES_DB),
  synchronize: false,
  migrationsRun: false,
  logging: true,
  entities: ["src/db/entity/*.ts"],
  subscribers: [],
  migrations: ["src/db/migrations/*.ts"],
});
