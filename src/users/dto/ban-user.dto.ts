import { ApiProperty } from "@nestjs/swagger";

export class BanUserDto {
  @ApiProperty({ example: "For descrimination", description: "Ban reason" })
  readonly banReason: string;
  @ApiProperty({ example: "1", description: "User ID" })
  readonly userId: number;
}
