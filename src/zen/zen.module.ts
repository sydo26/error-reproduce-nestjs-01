import { GithubModule, GithubService } from '@app/github';
// import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ZenController } from './zen.controller';
import { ZenService } from './zen.service';

@Module({
  imports: [
    /** I have to implement the HTTP module in this module to work, but if I don't inform the baseURL correctly here it won't work. */
    // HttpModule.register({
    //   baseURL: 'https://api.github.com',
    // }),

    /** If I just perform the module export without any configuration, it doesn't take advantage of the module's settings from github. */
    // HttpModule,

    /** The module below has its own HTTP module configuration. */
    GithubModule,
  ],
  controllers: [ZenController],
  providers: [ZenService],
})
export class ZenModule {}
