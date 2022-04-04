import { IsString, IsNotEmpty, IsEmail, Length, ValidateNested } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateLocationDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @ApiProperty()
  readonly type: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly dimension: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly residents: string[];

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly url: string;
}

export class UpdateLocationDto extends PartialType(CreateLocationDto) { }
