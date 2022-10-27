import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dro/create-role.dto';
import { Role } from './roles.model';
import { RolesService } from './roles.service';


@ApiTags("Roles")
@Controller("roles")
export class RolesController {
  constructor(private roleService: RolesService) {}

  @ApiOperation({ summary: "Getting role by value" })
  @ApiResponse({ status: 200, type: Role })
  @Get("/:value")
  getByValue(@Param("value") value: string) {
    return this.roleService.getRoleByValue(value);
  }

  @ApiOperation({ summary: "Create Role" })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  createRole(@Body() roleDto: CreateRoleDto) {
    return this.roleService.createRole(roleDto);
  }

  @ApiOperation({ summary: "Getting of all roles" })
  @ApiResponse({ status: 200, type: [Role] })
  @Get()
  getAllRoles() {
    return this.roleService.getAllRoles();
  }

  @ApiOperation({ summary: "Delete role" })
  @ApiResponse({ status: 200 })
  @Delete("/:value")
  deleteRole(@Param("value") value: string) {
    return this.roleService.deleteRole(value);
  }
}
