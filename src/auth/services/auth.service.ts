import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as bcrypt from 'bcrypt';
import { User } from '../modules/user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../modules/users.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  hasPassword(password: string): Observable<string> {
    return from(bcrypt.hash(password, 12));
  }

  regieterAccount(user: User): Observable<User> {
    const { name, email, password } = user;
    return from(
      this.userRepository.save({
        name,
        email,
        password,
      }),
    );
    // return this.hasPassword(password).pipe(
    //     switchMap(hashedPassword: string)) => {
    //     return from(this.userRepository.save({})),
    // });
  }

  // validateUser(email: string, password: string): Observable<User> {
  //   return from(
  //     this.userRepository.findOne(
  //       { email },
  //       { select: ['id', 'name', 'email', 'password', 'role'] },
  //     ),
  //   ).pipe(switchMap(user: User) => );
  // }

  login(user: User): Observable<string> {
    const { email, password } = user;
    return from(this.jwtService.signAsync({ user }));
  }
}
