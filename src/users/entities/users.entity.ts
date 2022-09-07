import { Orders } from '../../orders/entities/orders.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { FavoriteProducts } from '../../favorite-products/entities/favorite-products.entity';
import { ProductRatings } from '../../rating/entities/product-rating.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  username: string;

  @Column({
    name: 'password_hash',
    length: 500,
  })
  passwordHash: string;

  @Column({ length: 80 })
  email: string;

  @Column({ name: 'first_name', length: 15 })
  firstName: string;

  @Column({ name: 'last_name', length: 15 })
  lastName: string;

  @Column({ length: 30, nullable: true })
  city: string;

  @Column({ length: 30, nullable: true })
  street: string;

  @Column({ length: 10, nullable: true })
  zipcode: string;

  @OneToMany(() => FavoriteProducts, (favProducts) => favProducts.user)
  favProducts: FavoriteProducts[];

  @OneToMany(() => ProductRatings, (productRatings) => productRatings.user)
  productRatings: ProductRatings[];

  @OneToMany(() => Orders, (orders) => orders.user)
  orders: Orders[];
}
