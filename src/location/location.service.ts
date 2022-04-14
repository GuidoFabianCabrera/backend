import { Injectable, Inject } from '@nestjs/common';
import { Db } from 'mongodb';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Location } from './location.entity';
import { CreateLocationDto, UpdateLocationDto } from './location.dto';

@Injectable()
export class LocationService {
  constructor(
    @InjectModel(Location.name) private locationModel: Model<Location>,
  ) { }

  findAll() {
    return this.locationModel.find().exec();
  }

  async findOne(id: string) {
    return this.locationModel.findById(id);
  }

  create(data: CreateLocationDto) {
    const newModel = new this.locationModel({ ...data, created: new Date().toJSON() });
    return newModel.save();
  }

  update(id: string, changes: UpdateLocationDto) {
    return this.locationModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.locationModel.findByIdAndDelete(id);
  }
}
