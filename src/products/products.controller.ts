import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(@Query('search-term') searchTerm: string) {
    //create a MW for transforming the data as needed
    //get all products/or by a search term
  }

  @Get()
  getBySort(
    @Query('sort')
    sortCondition: 'low-to-high' | 'high-to-low' | 'popular' | 'rated',
  ) {
    //create a MW for getting the right data by the sort query
    //get products by sort condition
  }

  @Get('category/:categoryId')
  getProductsByCategory(@Param('categoryId', ParseIntPipe) categoryId: number) {
    //get products by category id
  }

  @Get(':id')
  getProduct(@Param('id', ParseIntPipe) id: number) {
    //get product by id
  }
}
