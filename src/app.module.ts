import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { FavoriteProductsModule } from './favorite-products/favorite-products.module';
import { CartModule } from './cart/cart.module';
import { OrdersModule } from './orders/orders.module';
import { CategoriesModule } from './categories/categories.module';
import { RatingModule } from './rating/rating.module';

@Module({
  imports: [UsersModule, ProductsModule, FavoriteProductsModule, CartModule, OrdersModule, CategoriesModule, RatingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
