import { Users } from '../../users/entities/users.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

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
}
