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
    // const order = await this.ordersRepo.find({
    //   where: { user: userId, id: orderId },
    // });
    const order = await this.ordersRepo.query(
      `select o.id,od.quantity,o.date,p.name,p.unit_price from orders o join order_details od on o.id = od.order_id join products p on od.product_id = p.id where o.id = ${orderId} and o.user_id = ${userId}`,
    );
    return order;
  }

  async placeOrder(session, orderDetails: OrderDetails[]) {
    const userId = session.user.id;
    const order = await this.ordersRepo.save({
      user: userId,
      date: new Date(),
    });

    // await this.orderDetailsRepo.save([
    //   { order, quantity: 2, product: await this.productsService.getById(2) },
    //   { order, quantity: 2, product: await this.productsService.getById(4) },
    //   { order, quantity: 2, product: await this.productsService.getById(7) },
    // ]);
    for (const product of orderDetails) {
      await this.orderDetailsRepo.query(
        `insert into order_details values(${order.id},${product.product},${product.quantity})`,
      );
    }
    return order.id;
  }
}
