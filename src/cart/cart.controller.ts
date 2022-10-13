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
  async getCartById(@Session() session: Record<string, any>) {
    return await this.cartService.getCartById(session);
  }

  @Post()
  async addProduct(
    @Body(new ValidationPipe()) productData: AddProductDto,
    @Session() session: Record<string, any>,
  ) {
    await this.cartService.addProductToCart(productData, session);
  }

  @Put(':prodId')
  async updateCart(
    @Body('quantity', ParseIntPipe) quantity: number,
    @Param('prodId', ParseIntPipe) prodId: number,
    @Session() session: Record<string, any>,
  ) {
    await this.cartService.updateProductQuantity(prodId, quantity, session);
  }

  @Delete(':prodId')
  async deleteProd(
    @Param('prodId', ParseIntPipe) prodId: number,
    @Session() session: Record<string, any>,
  ) {
    await this.cartService.deleteProduct(prodId, session);
  }

  @Delete()
  async deleteCart(@Session() session: Record<string, any>) {
    await this.cartService.deleteCart(session);
  }
}
