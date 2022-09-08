import { Users } from '../../users/entities/users.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Products } from '../../products/entities/products.entity';

@Entity()
export class Carts {
  @Column({ primary: true, type: 'int', name: 'product_id' })
  productId: number;

  @Column({ type: 'smallint' })
  quantity: number;

  @OneToOne(() => Users, {
    nullable: false,
    primary: true,
  })
  @JoinColumn({ name: 'user_id' })
  user: Users;

  // @OneToMany(() => Products, (products) => products.cart, { primary: true })
  // @JoinColumn({ name: 'product_id' })
  // products: Products[];
}
