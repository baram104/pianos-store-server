import { Categories } from '../../categories/entities/categories.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { FavoriteProducts } from '../../favorite-products/entities/favorite-products.entity';
import { OrderDetails } from '../../orders/entities/orderDetails.entity';
import { ProductRatings } from '../../rating/entities/product-rating.entity';
import { Carts } from '../../cart/entities/carts.entity';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({
    length: 500,
  })
  description: string;

  @Column({ name: 'unit_price', type: 'decimal', precision: 10, scale: 2 })
  unitPrice: string;

  @Column({ name: 'units_in_stock', type: 'smallint' })
  unitsInStock: string;

  @Column({ name: 'avg_rating', type: 'tinyint', nullable: true })
  avgRating: number;

  @ManyToOne(() => Categories, (category) => category.products, {
    nullable: false,
  })
  @JoinColumn({ name: 'category_id' })
  category: Categories;

  @OneToMany(() => FavoriteProducts, (favProducts) => favProducts.product)
  favProducts: FavoriteProducts[];

  @OneToMany(() => OrderDetails, (orderDetails) => orderDetails.product)
  orderDetails: OrderDetails[];

  @OneToMany(() => ProductRatings, (productRatings) => productRatings.product)
  productRatings: ProductRatings[];

  // @ManyToOne(() => Carts, (cart) => cart.products)
  // cart: Carts;
}
