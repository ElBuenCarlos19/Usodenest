import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Task_status {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;
}