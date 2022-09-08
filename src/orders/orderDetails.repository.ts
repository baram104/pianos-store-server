import { EntityRepository, Repository } from 'typeorm';
import { OrderDetails } from './entities/orderDetails.entity';
import { Orders } from './entities/orders.entity';

@EntityRepository(OrderDetails)
export class OrderDetailsRepository extends Repository<OrderDetails> {}
