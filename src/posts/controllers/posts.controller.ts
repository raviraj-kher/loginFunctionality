import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { PostData } from '../models/post.interface';
import { PostsService } from '../services/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}
  // get all users
  @Get()
  getUsers() {
    return this.postService.getAllUsers();
  }
  // create user
  @Post()
  async createPost(@Body() post: PostData): Promise<Observable<PostData>> {
    return this.postService.createPost(post);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() post: PostData) {
    return this.postService.updatePost(id, post);
  }
  // //delete users
  @Delete(':id')
  async deletePost(@Param('id') id: number) {
    this.postService.deletePost(id);
  }
}
