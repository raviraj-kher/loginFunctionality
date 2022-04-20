import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { PostData } from '../models/post.interface';
import { PostsService } from '../services/posts.service';
import Posts from 'src/posts/models/post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}
  // get all post

  @UseGuards(JwtGuard)
  @Get()
  getPosts(): Observable<Posts[]> {
    return this.postService.getAllPosts();
  }
  // create post
  @Post()
  async createPost(
    @Body() posts: PostData,
    @Request() req,
  ): Promise<Observable<PostData>> {
    return this.postService.createPost(req.user, posts);
  }
  // async createPost(@Body() post: PostData, @Req() req: RequestWithUser) {
  //   return this.postService.createPost(post, req.user);
  // }

  @Put(':id')
  update(@Param('id') id: number, @Body() posts: PostData) {
    return this.postService.updatePost(id, posts);
  }
  // //delete post
  @Delete(':id')
  async deletePost(@Param('id') id: number) {
    this.postService.deletePost(id);
  }
}
