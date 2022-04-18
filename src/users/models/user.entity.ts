import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Post from 'src/posts/models/post.entity';

@Entity('user')
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => Post, (post: Post) => post.title)
  public posts: Post[];
}
export default User;
