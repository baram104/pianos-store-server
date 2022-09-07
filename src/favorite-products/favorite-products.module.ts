import { Module } from '@nestjs/common';
import { FavoriteProductsController } from './favorite-products.controller';
import { FavoriteProductsService } from './favorite-products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteProductsRepository } from './favorite-products.repository';
@Module({
  imports: [TypeOrmModule.forFeature([FavoriteProductsRepository])],
  controllers: [FavoriteProductsController],
  providers: [FavoriteProductsService],
})
export class FavoriteProductsModule {}
