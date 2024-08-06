import { Service } from "typedi";
import { DataSource } from "typeorm";
import { ExampleEntity } from "../db/entity/ExampleEntity";
import { ExampleType } from "../types/ExampleType";

@Service()
export class ExampleService {
  constructor(private dataSource: DataSource) {}

  async getExamples(): Promise<ExampleType[]> {
    return await this.dataSource.manager.find(ExampleEntity);
  }

  async insertExample(newExample: string) {
    await this.dataSource.manager.save(ExampleEntity, { example: newExample });
  }

  async updateExampleById(exampleId: string, updatedExample: string) {
    await this.dataSource.manager.update(
      ExampleEntity,
      {
        where: { id: exampleId },
      },
      { example: updatedExample }
    );
  }

  async deleteExample(exampleId: string) {
    await this.dataSource.manager.delete(ExampleEntity, {
      where: { id: exampleId },
    });
  }
}
