import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Task } from './entities/task.entity'
import { Task_category } from './entities/task_category.entity';
import { Task_status } from './entities/task_status.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([User,Task,Task_category,Task_status]
    )
  ],
  controllers: [UserController],
  providers: [UserService],
  
})

export class UserModule {}
