import { GithubService } from '@app/github';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ZenService {
  constructor(private githubService: GithubService) {}

  async getZen(): Promise<string> {
    return this.githubService.zen();
  }
}
