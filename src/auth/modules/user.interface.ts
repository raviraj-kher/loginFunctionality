import { PostData } from 'src/posts/models/post.interface';
import { Role } from './role.enum';

export interface User {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  role?: Role;
  posts?: PostData[];
}
