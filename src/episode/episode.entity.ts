import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Episode extends Document {
  @Prop({ required: true, })
  name: string;

  @Prop({ required: true, })
  air_date: string;

  @Prop({ required: true, })
  episode: string;

  @Prop({ type: Array, required: true, })
  characters: any;

  @Prop({ required: true, })
  url: string;

  @Prop({ required: true, })
  created: string;

}

export const EpisodeSchema = SchemaFactory.createForClass(Episode);
