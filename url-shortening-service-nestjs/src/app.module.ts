import { Module } from '@nestjs/common';
import { UrlsModule } from './urls/urls.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [UrlsModule, CatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
