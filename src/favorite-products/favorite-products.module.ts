import { Module } from '@nestjs/common';
import { FavoriteProductsController } from './favorite-products.controller';
import { FavoriteProductsService } from './favorite-products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteProductsRepository } from './favorite-products.repository';
import { ProductsModule } from '../products/products.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([FavoriteProductsRepository]),
    ProductsModule,
  ],
  controllers: [FavoriteProductsController],
  providers: [FavoriteProductsService],
})
export class FavoriteProductsModule {}
