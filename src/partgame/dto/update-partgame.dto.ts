import { PartialType } from '@nestjs/mapped-types';
import { CreatePartgameDto } from './create-partgame.dto';

export class UpdatePartgameDto extends PartialType(CreatePartgameDto) {}
