import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { User } from 'src/auth/modules/user.interface';
import { Repository, UpdateResult } from 'typeorm';
import Posts from '../models/post.entity';
import { PostData } from '../models/post.interface';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private readonly postRepository: Repository<Posts>,
  ) {}

  // find all
  getAllPosts(): Observable<Posts[]> {
    return from(this.postRepository.find());
  }

  // create
  async createPost(user: User, post: PostData): Promise<Observable<PostData>> {
    post.author = user;
    return from(this.postRepository.save(post));
  }

  async updatePost(
    id: number,
    post: PostData,
  ): Promise<Observable<UpdateResult>> {
    return from(this.postRepository.update(id, post));
  }
  // delete
  async deletePost(id: number) {
    return from(this.postRepository.delete(id));
  }
}
