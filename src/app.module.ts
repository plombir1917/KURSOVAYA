import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { AdminModule } from './admin/admin.module';
import { MemberModule } from './member/member.module';
import { TeamModule } from './team/team.module';
import { ContestModule } from './contest/contest.module';
import { GameModule } from './game/game.module';
import { SeasonModule } from './season/season.module';
import { PopularityModule } from './popularity/popularity.module';
import { EditorModule } from './editor/editor.module';

@Module({
  imports: [DbModule, AdminModule, MemberModule, TeamModule, ContestModule, GameModule, SeasonModule, PopularityModule, EditorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
