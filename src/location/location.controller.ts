import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseGuards
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { LocationService } from './location.service';
import { CreateLocationDto, UpdateLocationDto } from './location.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { Public } from '../auth/decorators/public.decorator'


@UseGuards(JwtAuthGuard)
@ApiTags('locations')
@Controller('locations')
export class LocationController {
  constructor(private locationService: LocationService) { }

  @Public()
  @Get()
  @ApiOperation({
    summary: 'List of locations',
  })
  findAll() {
    return this.locationService.findAll();
  }

  @Public()
  @Get(':id')
  get(@Param('id') id: string) {
    return this.locationService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateLocationDto) {
    return this.locationService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateLocationDto) {
    return this.locationService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locationService.remove(id);
  }
}
