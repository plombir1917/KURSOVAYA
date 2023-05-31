import { Module } from '@nestjs/common';
import { PartseasonService } from './partseason.service';
import { PartseasonController } from './partseason.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [PartseasonController],
  providers: [PartseasonService],
})
export class PartseasonModule {}
