import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private productsRepo: ProductsRepository) {}
  getBySearchTerm(searchTerm: string) {}

  getBySort(
    sortCondition: 'low-to-high' | 'high-to-low' | 'popular' | 'rated',
  ) {}

  getByCategory(categoryId: number) {}
  async getById(id: number) {
    return await this.productsRepo.findOne(id);
  }
}
