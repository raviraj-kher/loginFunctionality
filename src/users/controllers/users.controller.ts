import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserData } from '../models/user.interface';
import { UsersService } from '../services/users.service';
@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // get all users
  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }
  // create user
  @Post()
  async createUser(@Body() user: UserData): Promise<Observable<UserData>> {
    return this.usersService.createUser(user);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: UserData) {
    return this.usersService.updateUser(id, user);
  }
  // //delete users
  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    this.usersService.deleteUser(id);
  }
}
