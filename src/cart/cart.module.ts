import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartsRepository } from './carts.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CartsRepository])],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
