import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateRoleDto {
  @ApiProperty({ example: "Admin", description: "Role name" })
  @IsString({ message: "Use to be String" })
  readonly value: string;
  @ApiProperty({ example: "Administrator", description: "Role description" })
  @IsString({ message: "Use to be String" })
  readonly description: string;
}