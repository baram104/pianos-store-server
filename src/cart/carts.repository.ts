import { EntityRepository, Repository } from 'typeorm';
import { Carts } from './entities/carts.entity';

@EntityRepository(Carts)
export class CartsRepository extends Repository<Carts> {}
