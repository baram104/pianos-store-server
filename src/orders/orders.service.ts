import { Injectable, Session } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { Orders } from './entities/orders.entity';
import { OrderDetails } from './entities/orderDetails.entity';
import { OrderDetailsRepository } from './orderDetails.repository';
import { ProductsService } from '../products/products.service';

@Injectable()
export class OrdersService {
  constructor(
    private ordersRepo: OrdersRepository,
    private orderDetailsRepo: OrderDetailsRepository,
    private productsService: ProductsService,
  ) {}
  async getOrderById(session, orderId: number) {
    const userId = session.user.id;
    const order = await this.ordersRepo.find({
      where: { user: userId, id: orderId },
    });
    return order;
  }

  async placeOrder(session, orderDetails: OrderDetails[]) {
    const userId = session.user.id;
    const order = await this.ordersRepo.save({
      user: userId,
      date: new Date(),
    });

    await this.orderDetailsRepo.save([
      { order, quantity: 2, product: await this.productsService.getById(2) },
      { order, quantity: 2, product: await this.productsService.getById(4) },
      { order, quantity: 2, product: await this.productsService.getById(7) },
    ]);
  }
}
