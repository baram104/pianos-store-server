import { Module } from '@nestjs/common';
import { FavoriteProductsController } from './favorite-products.controller';
import { FavoriteProductsService } from './favorite-products.service';

@Module({
  controllers: [FavoriteProductsController],
  providers: [FavoriteProductsService]
})
export class FavoriteProductsModule {}
