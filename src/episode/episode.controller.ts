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

import { EpisodeService } from './episode.service';
import { CreateEpisodeDto, UpdateEpisodeDto } from './episode.dto';

@ApiTags('episodes')
@Controller('episodes')
export class EpisodeController {
  constructor(private episodeService: EpisodeService) { }

  @Get()
  @ApiOperation({
    summary: 'List of Episodes',
  })
  findAll() {
    return this.episodeService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.episodeService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateEpisodeDto) {
    return this.episodeService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateEpisodeDto) {
    return this.episodeService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.episodeService.remove(id);
  }
}
