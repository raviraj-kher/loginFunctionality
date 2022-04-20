import { UserEntity } from 'src/auth/modules/users.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'posts' })
class Posts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  // @ManyToOne(() => User, (user: User) => user.posts)
  // @JoinColumn({ name: 'userId' })
  // user: User;

  @ManyToOne(() => UserEntity, (UserEntity) => UserEntity.posts)
  author: UserEntity;
}
export default Posts;
