import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PopularityService } from './popularity.service';
import { CreatePopularityDto } from './dto/create-popularity.dto';
import { UpdatePopularityDto } from './dto/update-popularity.dto';

@Controller('popularity')
export class PopularityController {
  constructor(private readonly popularityService: PopularityService) {}

  @Post()
  create(@Body() createPopularityDto: CreatePopularityDto) {
    return this.popularityService.create(createPopularityDto);
  }

  @Get()
  findAll() {
    return this.popularityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.popularityService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePopularityDto: UpdatePopularityDto,
  ) {
    return this.popularityService.update(+id, updatePopularityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.popularityService.remove(+id);
  }
}
