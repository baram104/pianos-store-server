import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Put,
  Post,
  Body,
  ParseBoolPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { FavoriteProductsService } from './favorite-products.service';
import { Session } from '@nestjs/common/decorators';

@Controller('favorite-products')
@UseGuards(AuthGuard)
export class FavoriteProductsController {
  constructor(private readonly favProductsService: FavoriteProductsService) {}
  @Delete(':prodId')
  deleteFavProduct(
    @Param('prodId', ParseIntPipe) prodId: number,
    @Session() session: Record<string, any>,
  ) {
    this.favProductsService.deleteProduct(session, prodId);
    //remove this product from this wishlist
  }

  @Get()
  async getFavProducts(@Session() session: Record<string, any>) {
    return await this.favProductsService.getProducts(session);
  }

  @Put(':prodId')
  updateFavProduct(
    @Param('prodId', ParseIntPipe) prodId: number,
    @Body('notifyWhenInStock', ParseIntPipe) notifyWhenInStock: number,
    @Session() session: Record<string, any>,
  ) {
    this.favProductsService.updateProduct(session, notifyWhenInStock, prodId);
  }

  @Post()
  addFavProduct(
    @Body('prodId', ParseIntPipe) prodId: number,
    @Session() session: Record<string, any>,
  ) {
    this.favProductsService.addProduct(session, prodId);
  }
}
