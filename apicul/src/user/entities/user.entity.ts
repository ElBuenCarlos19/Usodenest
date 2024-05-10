import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Task } from './task.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  username: string

  @Column()
  password: string

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Task, (Task) => Task.user)
  task: Task[];

}