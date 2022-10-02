import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { timeStamp } from 'console';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('sort')
  getBySort(
    @Query('condition')
    sortCondition: 'low-to-high' | 'high-to-low' | 'popular' | 'rated',
  ) {
    return this.productsService.getBySort(sortCondition);
  }

  @Get('category/:categoryId')
  getProductsByCategory(@Param('categoryId', ParseIntPipe) categoryId: number) {
    return this.productsService.getByCategory(categoryId);
  }

  @Get(':id')
  getProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.getById(id);
  }

  @Get()
  getAll() {
    return this.productsService.getAll();
  }
}
