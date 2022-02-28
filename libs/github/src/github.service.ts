import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, map } from 'rxjs';

@Injectable()
export class GithubService {
  constructor(private httpService: HttpService) {}

  // Simple zen message by github
  zen(): Promise<string> {
    return firstValueFrom(
      this.httpService.get<string>('/zen').pipe(map((res) => res.data)),
    );
  }
}
