import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) { }

  @Get()
  @ApiOperation({
    summary: 'List of users',
  })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.userService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateUserDto) {
    return this.userService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
