import { Injectable, Inject } from '@nestjs/common';
import { Db } from 'mongodb';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Episode } from './episode.entity';
import { CreateEpisodeDto, UpdateEpisodeDto } from './episode.dto';

@Injectable()
export class EpisodeService {
  constructor(
    @InjectModel(Episode.name) private episodeModel: Model<Episode>,
  ) { }

  findAll() {
    return this.episodeModel.find().exec();
  }

  async findOne(id: string) {
    return this.episodeModel.findById(id);
  }

  create(data: CreateEpisodeDto) {
    const newModel = new this.episodeModel({ ...data, created: new Date().toJSON() });
    return newModel.save();
  }

  update(id: string, changes: UpdateEpisodeDto) {
    return this.episodeModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.episodeModel.findByIdAndDelete(id);
  }
}
