import { Injectable, Inject } from '@nestjs/common';
import { Db } from 'mongodb';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Company } from './company.entity';
import { CreateCompanyDto, UpdateCompanyDto } from './company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<Company>,
  ) { }

  findAll() {
    return this.companyModel.find().exec();
  }

  async findOne(id: string) {
    return this.companyModel.findById(id);
  }

  create(data: CreateCompanyDto) {
    const newModel = new this.companyModel({ ...data, created: new Date().toJSON() });
    return newModel.save();
  }

  update(id: string, changes: UpdateCompanyDto) {
    return this.companyModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.companyModel.findByIdAndDelete(id);
  }
}
