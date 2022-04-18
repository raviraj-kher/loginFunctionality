import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('post')
class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;
}
export default Post;
