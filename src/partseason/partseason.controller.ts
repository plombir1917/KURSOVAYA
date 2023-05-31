import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PartseasonService } from './partseason.service';
import { CreatePartseasonDto } from './dto/create-partseason.dto';
import { UpdatePartseasonDto } from './dto/update-partseason.dto';

@Controller('partseason')
export class PartseasonController {
  constructor(private readonly partseasonService: PartseasonService) {}

  @Post()
  create(@Body() createPartseasonDto: CreatePartseasonDto) {
    return this.partseasonService.create(createPartseasonDto);
  }

  @Get()
  findAll() {
    return this.partseasonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partseasonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePartseasonDto: UpdatePartseasonDto) {
    return this.partseasonService.update(+id, updatePartseasonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partseasonService.remove(+id);
  }
}
