import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from 'src/constants';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

@Injectable()
export class MemberService {
  constructor(@Inject(PG_CONNECTION) private conn: any) {}

  create(createMemberDto: CreateMemberDto) {
    return 'This action adds a new member';
  }

  async findAll() {
    const res = await this.conn.query('SELECT * FROM member');
    return res.rows;
  }

  findOne(id: number) {
    return `This action returns a #${id} member`;
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }
}
