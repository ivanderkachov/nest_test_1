import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as PostModel } from './posts.model';
import { PostsService } from './posts.service';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {

  constructor(private postService: PostsService) {}

  @ApiOperation({ summary: "User creating" })
  @ApiResponse({ status: 200, type: PostModel })
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  createPost(@Body() postDto: CreatePostDto, @UploadedFile() image) {
    return this.postService.createPost(postDto, image)
  }

}
