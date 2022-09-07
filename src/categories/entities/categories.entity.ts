import { Products } from '../../products/entities/products.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 500, nullable: true })
  description: string;

  @ManyToOne(() => Categories, (service) => service.children)
  @JoinColumn({ name: 'parent_id' })
  parent: Categories;

  @OneToMany(() => Categories, (service) => service.parent)
  children: Categories[];

  @OneToMany(() => Products, (products) => products.category)
  products: Products[];
}
