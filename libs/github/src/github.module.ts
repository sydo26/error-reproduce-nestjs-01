import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GithubService } from './github.service';

@Module({
  imports: [
    /** I want my HTTP Module configuration to be unique to this module, without the need for me to export the HTTP module again. */
    HttpModule.register({
      baseURL: 'https://api.github.com',
    }),
  ],
  providers: [GithubService],
  exports: [GithubService],
})
export class GithubModule {}
