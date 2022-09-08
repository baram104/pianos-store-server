import { Products } from '../../products/entities/products.entity';
import { Entity, JoinColumn, ManyToOne, Column } from 'typeorm';
import { Orders } from './orders.entity';

@Entity()
export class OrderDetails {
  @Column({ type: 'smallint' })
  quantity: number;

  @ManyToOne(() => Orders, (orders) => orders.orderDetails, {
    nullable: false,
    primary: true,
  })
  @JoinColumn({ name: 'order_id' })
  order: Orders;

  @ManyToOne(() => Products, (products) => products.orderDetails, {
    nullable: false,
    primary: true,
  })
  @JoinColumn({ name: 'product_id' })
  product: Products;
}
