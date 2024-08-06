import { Inject } from "typedi";
import { ExampleService } from "../services/ExampleService";
import {
  Body,
  JsonController,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "routing-controllers";

@JsonController("/example")
export class ExampleController {
  constructor(@Inject() private exampleService: ExampleService) {}

  @Get("/")
  async getExamples() {
    return await this.exampleService.getExamples();
  }

  @Post("/")
  async addExample(@Body() newExample: string) {
    return await this.exampleService.insertExample(newExample);
  }

  @Put("/:id")
  async updateExample(@Param("id") id: string, @Body() updatedExample: string) {
    return await this.exampleService.updateExampleById(id, updatedExample);
  }

  @Delete("/:id")
  async deleteExample(@Param("id") id: string) {
    return await this.exampleService.deleteExample(id);
  }
}
