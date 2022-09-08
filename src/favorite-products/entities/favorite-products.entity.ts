import { Users } from '../../users/entities/users.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Products } from '../../products/entities/products.entity';

@Entity()
export class FavoriteProducts {
  @Column({
    type: 'tinyint',
    name: 'notify_when_in_stock',
    nullable: true,
  })
  notifyWhenInStock: number;

  @Column({ primary: true, type: 'int', name: 'product_id' })
  productId: number;

  @ManyToOne(() => Users, (user) => user.favProducts, {
    nullable: false,
    primary: true,
  })
  @JoinColumn({ name: 'user_id' })
  user: Users;

  @ManyToOne(() => Products, (product) => product.favProducts, {
    nullable: false,
    primary: true,
  })
  @JoinColumn({ name: 'product_id' })
  product: Products;
}
