/* eslint-disable prettier/prettier */
import { Body, Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from 'src/constants';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

@Injectable()
export class MemberService {
  constructor(@Inject(PG_CONNECTION) private conn: any) {}

  async create(@Body() createMemberDto: CreateMemberDto) {
    const res = await this.conn.query(
      `INSERT INTO public.member (member_fullname, team_name, member_passport, member_phone) VALUES (${createMemberDto.member_fullname}::character varying(50), ${createMemberDto.team_name}::character varying(50), ${createMemberDto.member_passport}::character(20), ${createMemberDto.member_phone}::character(20)) returning member_fullname;`,
    );
    return res.rows;
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
