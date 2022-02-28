import { Controller, Get } from '@nestjs/common';
import { ZenService } from './zen.service';

@Controller()
export class ZenController {
  constructor(private zenService: ZenService) {}

  @Get('zen')
  zen() {
    return this.zenService.getZen();
  }
}
