import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AddProductDto } from './add-product-dto';
import { AuthGuard } from '../guards/auth.guard';
import { CartService } from './cart.service';
import { Session } from '@nestjs/common/decorators';

@Controller('cart')
@UseGuards(AuthGuard)
export class CartController {
  constructor(private readonly cartService: CartService) {}
  @Get()
  getCartById(@Session() session: Record<string, any>) {
    return this.cartService.getCartById(session);
  }

  @Post()
  addProduct(
    @Body(new ValidationPipe()) productData: AddProductDto,
    @Session() session: Record<string, any>,
  ) {
    this.cartService.addProductToCart(productData, session);
    //add cart
  }

  @Put(':prodId')
  updateCart(
    @Body('quantity', ParseIntPipe) quantity: number,
    @Param('prodId', ParseIntPipe) prodId: number,
    @Session() session: Record<string, any>,
  ) {
    this.cartService.updateProductQuantity(prodId, quantity, session);
  }

  @Delete(':prodId')
  deleteCart(
    @Param('prodId', ParseIntPipe) prodId: number,
    @Session() session: Record<string, any>,
  ) {
    this.cartService.deleteProduct(prodId, session);
  }
}
