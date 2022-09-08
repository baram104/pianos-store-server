import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';
import { Categories } from './entities/categories.entity';

@Injectable()
export class CategoriesService {
  constructor(private categoriesRepo: CategoriesRepository) {}
  getCategories(): Promise<Categories[]> {
    return this.categoriesRepo.find();
  }
}
