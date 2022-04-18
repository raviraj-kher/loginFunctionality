import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository, UpdateResult } from 'typeorm';
import User from '../models/user.entity';
import { UserData } from '../models/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // find all
  getAllUsers() {
    return from(this.userRepository.find());
  }
  // create
  async createUser(user: UserData): Promise<Observable<UserData>> {
    return from(this.userRepository.save(user));
  }

  async updateUser(
    id: number,
    user: UserData,
  ): Promise<Observable<UpdateResult>> {
    return from(this.userRepository.update(id, user));
  }
  // delete
  async deleteUser(id: number) {
    return from(this.userRepository.delete(id));
  }
}
