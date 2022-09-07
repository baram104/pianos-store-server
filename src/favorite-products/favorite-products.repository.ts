import { EntityRepository, Repository } from 'typeorm';
import { FavoriteProducts } from './entities/favorite-products.entity';

@EntityRepository(FavoriteProducts)
export class FavoriteProductsRepository extends Repository<FavoriteProducts> {}
