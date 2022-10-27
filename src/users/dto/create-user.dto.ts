import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "test@test.com", description: "Email" })
  readonly email: string;
  @ApiProperty({ example: "12345", description: "Password" })
  readonly password: string;
}