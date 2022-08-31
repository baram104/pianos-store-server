import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get(':id')
  getOrder(@Param('id', ParseIntPipe) id: number) {
    //guard
    //get order by id
  }

  @Post()
  placeOrder(@Body() order: any) {
    //guard
    //validate data through MW
    //create order
  }
}
