import { Controller, Get, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  @HttpCode(HttpStatus.PARTIAL_CONTENT)
  findAll(@Res() res: Response) {
    void res;
    // res
    //   .status(HttpStatus.PARTIAL_CONTENT)
    //   .send({ message: 'This action returns all cats' });
    return { message: 'This action returns all cats' };
  }
}
