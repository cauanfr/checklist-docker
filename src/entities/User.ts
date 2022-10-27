import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  age: number;
}
