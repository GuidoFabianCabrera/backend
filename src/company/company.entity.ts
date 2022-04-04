import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Company extends Document {
  @Prop({ required: true, })
  name: string;

  @Prop({ required: true, })
  status: string;

  @Prop({ required: true, })
  species: string;

  @Prop({})
  type: string;

  @Prop({ required: true })
  gender: string;

  @Prop({ type: Object, required: true })
  origin: {
    name: string,
    url: string
  };

  @Prop({ type: Object, required: true })
  location: {
    name: string,
    url: string
  };

  @Prop({ required: true })
  image: string;

  @Prop({ type: Array, required: true })
  episode: any;

  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  created: string;

}

export const CompanySchema = SchemaFactory.createForClass(Company);
