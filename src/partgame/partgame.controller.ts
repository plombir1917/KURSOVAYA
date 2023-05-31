import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PartgameService } from './partgame.service';
import { CreatePartgameDto } from './dto/create-partgame.dto';
import { UpdatePartgameDto } from './dto/update-partgame.dto';

@Controller('partgame')
export class PartgameController {
  constructor(private readonly partgameService: PartgameService) {}

  @Post()
  create(@Body() createPartgameDto: CreatePartgameDto) {
    return this.partgameService.create(createPartgameDto);
  }

  @Get()
  findAll() {
    return this.partgameService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partgameService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePartgameDto: UpdatePartgameDto) {
    return this.partgameService.update(+id, updatePartgameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partgameService.remove(+id);
  }
}
