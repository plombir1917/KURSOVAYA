import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from 'src/constants';
import { CreatePartgameDto } from './dto/create-partgame.dto';
import { UpdatePartgameDto } from './dto/update-partgame.dto';

@Injectable()
export class PartgameService {
  constructor(@Inject(PG_CONNECTION) private conn: any) {}

  create(createPartgameDto: CreatePartgameDto) {
    return 'This action adds a new partgame';
  }

  async findAll() {
    const res = await this.conn.query(
      'SELECT * FROM public."Participation in the game"',
    );
    return res.rows;
  }

  findOne(id: number) {
    return `This action returns a #${id} partgame`;
  }

  update(id: number, updatePartgameDto: UpdatePartgameDto) {
    return `This action updates a #${id} partgame`;
  }

  remove(id: number) {
    return `This action removes a #${id} partgame`;
  }
}
