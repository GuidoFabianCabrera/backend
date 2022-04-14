import { IsString, IsNotEmpty, IsEmail, Length, ValidateNested, IsOptional, ValidateIf, ValidationOptions, IsDefined, IsNotEmptyObject, IsObject } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

function IsNullable(validationOptions?: ValidationOptions) {
  return ValidateIf((_object, value) => value !== null, validationOptions);
}

class Origin {
  @IsNullable()
  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly name: string;

  @IsNullable()
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

  // @IsNullable()
  // @ValidateNested()
  // @ApiProperty()
  // readonly origin: Origin;

  @IsDefined()
  @IsObject()
  @ValidateNested()
  @Type(() => Origin)
  origin!: Origin;


  @IsDefined()
  @IsObject()
  @ValidateNested()
  @Type(() => Origin)
  location!: Origin;

  // @IsNullable()
  // @ValidateNested()
  // @ApiProperty()
  // readonly location: Origin;

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
