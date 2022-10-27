import { Body, Controller, Delete, Get, Param, Post, UseGuards, UsePipes} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Console } from 'console';
import { INTEGER } from 'sequelize';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';


@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: "User creating" })
  @ApiResponse({ status: 200, type: User })
  // @UsePipes(ValidationPipe)
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({ summary: "Get all users" })
  @ApiResponse({ status: 200, type: [User] })
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.userService.getAllusers();
  }

  @ApiOperation({ summary: "Delete user" })
  @ApiResponse({ status: 200 })
  @Roles("Admin")
  @UseGuards(RolesGuard)
  @Delete(":id")
  deleteUser(@Param() params) {
    return this.userService.deleteUser(params.id);
  }

  @ApiOperation({ summary: "Role issuing" })
  @ApiResponse({ status: 200 })
  @Roles("Admin")
  @UseGuards(RolesGuard)
  @Post("/role")
  addRole(@Body() dto: AddRoleDto) {
    return this.userService.addRole(dto);
  }

  @ApiOperation({ summary: "Ban user" })
  @ApiResponse({ status: 200 })
  @Roles("Admin")
  @UseGuards(RolesGuard)
  @Post("/ban")
  banUser(@Body() dto: BanUserDto) {
    return this.userService.banUser(dto);
  }
}
