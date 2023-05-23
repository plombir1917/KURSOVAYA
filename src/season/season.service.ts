import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from 'src/constants';
import { CreateSeasonDto } from './dto/create-season.dto';
import { UpdateSeasonDto } from './dto/update-season.dto';

@Injectable()
export class SeasonService {
  constructor(@Inject(PG_CONNECTION) private conn: any) {}
  create(createSeasonDto: CreateSeasonDto) {
    return 'This action adds a new season';
  }

  async findAll() {
    const res = await this.conn.query('SELECT * FROM season');
    return res.rows;
  }

  findOne(id: number) {
    return `This action returns a #${id} season`;
  }

  update(id: number, updateSeasonDto: UpdateSeasonDto) {
    return `This action updates a #${id} season`;
  }

  remove(id: number) {
    return `This action removes a #${id} season`;
  }
}
