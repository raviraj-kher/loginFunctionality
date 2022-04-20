import { User } from 'src/auth/modules/user.interface';

export interface PostData {
  id?: number;
  title: string;
  description?: string;
  author?: User;
}
