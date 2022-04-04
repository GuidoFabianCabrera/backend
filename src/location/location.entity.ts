import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Location extends Document {
  @Prop({ required: true, })
  name: string;

  @Prop({})
  type: string;

  @Prop({ required: true, })
  dimension: string;

  @Prop({ type: Array, required: true, })
  residents: any;

  @Prop({ required: true, })
  url: string;

  @Prop({ required: true, })
  created: string;

}

export const LocationSchema = SchemaFactory.createForClass(Location);
