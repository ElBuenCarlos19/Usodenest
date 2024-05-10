import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { User } from './user.entity';
import { Task_category } from './task_category.entity';
import { Task_status } from './task_status.entity';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Task_category)
    @JoinColumn({ name: 'task_category_id'})
    task_category: Task_category

    @OneToOne(() => Task_status)
    @JoinColumn({ name: 'task_status_id'})
    task_status: Task_status

    @ManyToOne(() => User, (User) => User.task)
    @JoinColumn({ name: 'user_id' })
    user: User
}