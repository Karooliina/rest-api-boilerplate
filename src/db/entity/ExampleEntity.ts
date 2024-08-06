import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ExampleEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  example!: string;
}
