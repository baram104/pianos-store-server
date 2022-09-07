import { EntityRepository, Repository } from 'typeorm';
import { ProductRatings } from './entities/product-rating.entity';

@EntityRepository(ProductRatings)
export class ProductRatingsRepository extends Repository<ProductRatings> {}
