import { IsString, IsNotEmpty, IsEmail, Length, ValidateNested, IsOptional } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

class Origin {
  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly name: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly url: string;
}

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly status: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly species: string;

  @IsString()
  @ApiProperty()
  readonly type: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly gender: string;

  @ValidateNested()
  @ApiProperty()
  readonly origin: Origin;

  @ValidateNested()
  @ApiProperty()
  readonly location: Origin;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly image: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly episode: string[];

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly url: string;



}

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) { }
