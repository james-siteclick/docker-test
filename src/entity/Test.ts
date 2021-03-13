import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Test {
  @PrimaryGeneratedColumn("uuid")
  id: string;
}
