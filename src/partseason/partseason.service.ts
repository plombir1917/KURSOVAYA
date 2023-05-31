import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from 'src/constants';
import { CreatePartseasonDto } from './dto/create-partseason.dto';
import { UpdatePartseasonDto } from './dto/update-partseason.dto';

@Injectable()
export class PartseasonService {
  constructor(@Inject(PG_CONNECTION) private conn: any) {}

  create(createPartseasonDto: CreatePartseasonDto) {
    return 'This action adds a new partseason';
  }

  async findAll() {
    const res = await this.conn.query(
      'SELECT * FROM public."Participation in the season"',
    );
    return res.rows;
  }

  findOne(id: number) {
    return `This action returns a #${id} partseason`;
  }

  update(id: number, updatePartseasonDto: UpdatePartseasonDto) {
    return `This action updates a #${id} partseason`;
  }

  remove(id: number) {
    return `This action removes a #${id} partseason`;
  }
}
