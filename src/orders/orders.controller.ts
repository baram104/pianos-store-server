import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { OrderDto } from './order-dto';

@Controller('orders')
@UseGuards(AuthGuard)
export class OrdersController {
  @Get(':id')
  getOrder(@Param('id', ParseIntPipe) id: number) {
    //get order by id
  }

  @Post()
  placeOrder(@Body(new ValidationPipe()) order: OrderDto) {
    //validate data through MW
    //create order
  }
}
