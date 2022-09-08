import { Products } from '../../products/entities/products.entity';
import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { Users } from '../../users/entities/users.entity';

@Entity()
export class ProductRatings {
  @Column({
    type: 'tinyint',
  })
  rating: number;

  @ManyToOne(() => Users, (users) => users.productRatings, {
    nullable: false,
    primary: true,
  })
  @JoinColumn({ name: 'user_id' })
  user: Users;

  @ManyToOne(() => Products, (products) => products.productRatings, {
    nullable: false,
    primary: true,
  })
  @JoinColumn({ name: 'product_id' })
  product: Products;
}
