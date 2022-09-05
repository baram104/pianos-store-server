import { Injectable, Session } from '@nestjs/common';
import { OrderDto } from './order-dto';

@Injectable()
export class OrdersService {
  getOrderById(@Session() session: Record<string, any>, orderId: number) {
    const userId = session.user.id;
    //check if user id has this orderId
  }

  placeOrder(@Session() session: Record<string, any>, order: OrderDto) {
    const userId = session.user.id;
  }
}
