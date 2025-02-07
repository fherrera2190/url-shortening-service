import { Module } from '@nestjs/common';
import { CatsController } from './cats.controllers';

@Module({
  controllers: [CatsController],
  providers: [],
})
export class CatsModule {}
