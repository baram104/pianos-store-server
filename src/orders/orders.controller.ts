import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { OrderDto } from './order-dto';

@Controller('orders')
export class OrdersController {
  @Get(':id')
  getOrder(@Param('id', ParseIntPipe) id: number) {
    //guard
    //get order by id
  }

  @Post()
  placeOrder(@Body(new ValidationPipe()) order: OrderDto) {
    //validate data through MW
    //create order
  }
}
