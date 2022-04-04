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

import { LocationService } from './location.service';
import { CreateLocationDto, UpdateLocationDto } from './location.dto';

@ApiTags('locations')
@Controller('locations')
export class LocationController {
  constructor(private locationService: LocationService) { }

  @Get()
  @ApiOperation({
    summary: 'List of locations',
  })
  findAll() {
    return this.locationService.findAll();
  }

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
