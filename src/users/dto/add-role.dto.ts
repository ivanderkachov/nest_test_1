import { ApiProperty } from "@nestjs/swagger";

export class AddRoleDto {
  @ApiProperty({ example: "Admin", description: "Role" })
  readonly value: string;
  @ApiProperty({ example: "1", description: "User ID" })
  readonly userId: number;
}
