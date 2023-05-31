import { PartialType } from '@nestjs/mapped-types';
import { CreatePartseasonDto } from './create-partseason.dto';

export class UpdatePartseasonDto extends PartialType(CreatePartseasonDto) {}
