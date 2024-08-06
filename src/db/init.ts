import { PgDataSource } from "./data-source/PgDataSource";

export async function dataSourceInit() {
  try {
    PgDataSource.initialize().then(() =>
      console.log(`Data source initialized`)
    );
  } catch (e) {
    console.error("Error during data source initalization", e);
  }
}
