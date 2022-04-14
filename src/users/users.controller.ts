import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import CreateUserDto from './dto/createUser.dto';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // get all users
  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }

  // create user
  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }
  //delete users
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    this.usersService.deleteUser(Number(id));
  }
}
