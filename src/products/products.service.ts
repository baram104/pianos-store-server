import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getBySearchTerm(searchTerm: string) {}

  getBySort(
    sortCondition: 'low-to-high' | 'high-to-low' | 'popular' | 'rated',
  ) {}

  getByCategory(categoryId: number) {}
  getById(id: number) {}
}
