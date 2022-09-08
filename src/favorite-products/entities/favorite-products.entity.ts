import { Users } from '../../users/entities/users.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Products } from '../../products/entities/products.entity';

@Entity()
export class FavoriteProducts {
  @Column({
    type: 'bit',
    default: false,
    name: 'notify_when_in_stock',
    nullable: true,
  })
  notifyWhenInStock: boolean;

  @ManyToOne(() => Users, (user) => user.favProducts, {
    nullable: false,
    primary: true,
  })
  @JoinColumn({ name: 'user_id' })
  user: Users;

  @ManyToOne(() => Products, (products) => products.favoriteProducts, {
    nullable: false,
    primary: true,
  })
  @JoinColumn({ name: 'product_id' })
  product: Products;
}
