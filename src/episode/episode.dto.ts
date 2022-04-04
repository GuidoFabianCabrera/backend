import { IsString, IsNotEmpty, IsEmail, Length, ValidateNested, IsOptional } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateEpisodeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly air_date: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly episode: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly characters: string[];

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly url: string;
}

export class UpdateEpisodeDto extends PartialType(CreateEpisodeDto) { }
