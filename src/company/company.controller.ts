import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseGuards,
  SetMetadata
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

import { CompanyService } from './company.service';
import { CreateCompanyDto, UpdateCompanyDto } from './company.dto';

import { ApiKeyGuard } from '../auth/guards/api-key.guard'
import { Public } from '../auth/decorators/public.decorator'
import { Roles } from '../auth/decorators/roles.decorator'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { RolesGuard } from '../auth/guards/roles.guard'
import { Role } from '../auth/models/roles.model'

@UseGuards(JwtAuthGuard)
@ApiTags('characters')
@Controller('characters')
export class CompanyController {
  constructor(private companyService: CompanyService) { }

  @Public()
  @Get()
  @ApiOperation({
    summary: 'List of characters',
  })
  findAll() {
    return this.companyService.findAll();
  }

  @Public()
  @Get(':id')
  get(@Param('id') id: string) {
    return this.companyService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateCompanyDto) {
    return this.companyService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateCompanyDto) {
    return this.companyService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyService.remove(id);
  }
}
