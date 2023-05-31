import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from 'src/constants';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@Inject(PG_CONNECTION) private conn: any) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll() {
    const res = await this.conn.query('SELECT * FROM auth');
    return res.rows;
  }

  async findOne(login: string) {
    const res = await this.conn.query(
      `SELECT * FROM auth WHERE login = '${login}'`,
    );
    return res.rows;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
