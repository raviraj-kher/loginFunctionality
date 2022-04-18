import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository, UpdateResult } from 'typeorm';
import Post from '../models/post.entity';
import { PostData } from '../models/post.interface';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  // find all
  getAllUsers() {
    return from(this.postRepository.find());
  }
  // create
  async createPost(post: PostData): Promise<Observable<PostData>> {
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
