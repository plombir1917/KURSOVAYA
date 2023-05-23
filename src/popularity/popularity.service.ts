import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from 'src/constants';
import { CreatePopularityDto } from './dto/create-popularity.dto';
import { UpdatePopularityDto } from './dto/update-popularity.dto';

@Injectable()
export class PopularityService {
  constructor(@Inject(PG_CONNECTION) private conn: any) {}
  create(createPopularityDto: CreatePopularityDto) {
    return 'This action adds a new popularity';
  }

  async findAll() {
    const res = await this.conn.query('SELECT * FROM popularity');
    return res.rows;
  }

  findOne(id: number) {
    return `This action returns a #${id} popularity`;
  }

  update(id: number, updatePopularityDto: UpdatePopularityDto) {
    return `This action updates a #${id} popularity`;
  }

  remove(id: number) {
    return `This action removes a #${id} popularity`;
  }
}
