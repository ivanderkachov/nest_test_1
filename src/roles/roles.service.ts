import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dro/create-role.dto';
import { Role } from './roles.model';

@Injectable()
export class RolesService {

  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

  async createRole(dto: CreateRoleDto) {
    const role = await this.roleRepository.create(dto)
    return role
  }

  async getRoleByValue(value: string) {
    const role = await this.roleRepository.findOne({where:{value}})
    return role
  }

  async getAllRoles() {
    const roles = await this.roleRepository.findAll()
    return roles
  }

  async deleteRole(value: string) {
    const role = await this.roleRepository.destroy({where:{value}})
    return `Role ${value} has been deleted`
  }
}
