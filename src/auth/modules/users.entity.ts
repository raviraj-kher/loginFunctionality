import Posts from 'src/posts/models/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role.enum';
@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: Role;

  // @OneToMany(() => Post, (post: Post) => post.user)
  // posts: Post[];
  @OneToMany(() => Posts, (Post) => Post.author)
  posts: Posts[];
}
