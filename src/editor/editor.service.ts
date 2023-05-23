import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from 'src/constants';
import { CreateEditorDto } from './dto/create-editor.dto';
import { UpdateEditorDto } from './dto/update-editor.dto';

@Injectable()
export class EditorService {
  constructor(@Inject(PG_CONNECTION) private conn: any) {}

  create(createEditorDto: CreateEditorDto) {
    return 'This action adds a new editor';
  }

  async findAll() {
    const res = await this.conn.query('SELECT * FROM editor');
    return res.rows;
  }

  findOne(id: number) {
    return `This action returns a #${id} editor`;
  }

  update(id: number, updateEditorDto: UpdateEditorDto) {
    return `This action updates a #${id} editor`;
  }

  remove(id: number) {
    return `This action removes a #${id} editor`;
  }
}
