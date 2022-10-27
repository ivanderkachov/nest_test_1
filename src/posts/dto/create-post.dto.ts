import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, isNumberString, IsString } from "class-validator";

export class CreatePostDto {
  @ApiProperty({ example: "Post 1", description: "Post title" })
  @IsString({ message: "Use to be String" })
  readonly title: string;
  @ApiProperty({ example: "This is the post", description: "Post content" })
  @IsString({ message: "Use to be String" })
  readonly content: string;
  @ApiProperty({ example: "1", description: "User ID" })
  // @IsNumber({}, { message: "Use to be Number" })
  readonly userId: number;
  // @ApiProperty({ example: "Image.img", description: "Image" })
  // @IsString({ message: "Use to be String" })
  // readonly image: string;

}
