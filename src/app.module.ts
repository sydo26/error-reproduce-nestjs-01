import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ZenModule } from './zen/zen.module';

@Module({
  imports: [ZenModule],
  providers: [AppService],
})
export class AppModule {}
