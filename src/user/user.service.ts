import { Delete, Get, Injectable, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ){}
  @Post()
  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }
  @Get()
  findAll() {
    console.log(process.env.DB_HOST);
    return this.usersRepository.find()
  }

  @Get(':id')
  findOne(id: number) {
    return this.usersRepository.findOneBy({id});
  }
  @Patch(':id')
  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id,updateUserDto);
  }
  @Delete(':id')
  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
