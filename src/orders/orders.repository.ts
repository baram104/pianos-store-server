import { EntityRepository, Repository } from 'typeorm';
import { Orders } from './entities/orders.entity';

@EntityRepository(Orders)
export class OrdersRepository extends Repository<Orders> {}
