import { DataSource } from "typeorm";
import { ExampleEntity } from "../entity/ExampleEntity";

export const PgDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: true,
  entities: [ExampleEntity],
  subscribers: [],
  migrations: [],
});
