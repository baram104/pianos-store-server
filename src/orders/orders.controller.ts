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
import { OrdersService } from './orders.service';
import { Session } from '@nestjs/common/decorators';
import { Orders } from './entities/orders.entity';
import { OrderDetails } from './entities/orderDetails.entity';

@Controller('orders')
@UseGuards(AuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @Get(':id')
  async getOrder(
    @Param('id', ParseIntPipe) id: number,
    @Session() session: Record<string, any>,
  ) {
    return await this.ordersService.getOrderById(session, id);
  }

  @Post()
  placeOrder(
    @Body(new ValidationPipe()) orderDetails: OrderDetails[],
    @Session() session: Record<string, any>,
  ) {
    this.ordersService.placeOrder(session, orderDetails);
  }
}
