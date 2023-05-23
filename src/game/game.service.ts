import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from 'src/constants';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GameService {
  constructor(@Inject(PG_CONNECTION) private conn: any) {}

  create(createGameDto: CreateGameDto) {
    return 'This action adds a new game';
  }

  async findAll() {
    const res = await this.conn.query('SELECT * FROM game');
    return res.rows;
  }

  findOne(id: number) {
    return `This action returns a #${id} game`;
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
