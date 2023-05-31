import { Module } from '@nestjs/common';
import { PartgameService } from './partgame.service';
import { PartgameController } from './partgame.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [PartgameController],
  providers: [PartgameService],
})
export class PartgameModule {}
