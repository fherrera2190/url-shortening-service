import { Controller, Get, HttpCode, HttpStatus, Redirect, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  @HttpCode(HttpStatus.PARTIAL_CONTENT)
  // findAll(@Res() res: Response) {
  findAll() {
    //void res;
    // res
    //   .status(HttpStatus.PARTIAL_CONTENT)
    //   .send({ message: 'This action returns all cats' });
    return { message: 'This action returns all cats' };
  }

  @Get('abcd/*')
  // @Redirect('http://www.googl.com')
  findAll2() {
    return 'This route uses a wildcard';
  }
}
