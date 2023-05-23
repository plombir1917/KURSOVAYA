import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from 'src/constants';
import { CreateContestDto } from './dto/create-contest.dto';
import { UpdateContestDto } from './dto/update-contest.dto';

@Injectable()
export class ContestService {
  constructor(@Inject(PG_CONNECTION) private conn: any) {}
  create(createContestDto: CreateContestDto) {
    return 'This action adds a new contest';
  }

  async findAll() {
    const res = await this.conn.query('SELECT * FROM contests');
    return res.rows;
  }

  findOne(id: number) {
    return `This action returns a #${id} contest`;
  }

  update(id: number, updateContestDto: UpdateContestDto) {
    return `This action updates a #${id} contest`;
  }

  remove(id: number) {
    return `This action removes a #${id} contest`;
  }
}
