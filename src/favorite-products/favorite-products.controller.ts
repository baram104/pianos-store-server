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
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';

@Controller('favorite-products')
@UseGuards(AuthGuard)
export class FavoriteProductsController {
  @Delete(':prodId')
  deleteFavProduct(@Param('prodId', ParseIntPipe) prodId: number) {
    //remove this product from this wishlist
  }

  @Get()
  getFavProducts() {
    //get wish list of a user
  }

  @Put(':prodId')
  updateFavProduct(
    @Param('prodId', ParseIntPipe) prodId: number,
    @Body('notifyWhenInStock', ParseBoolPipe) notifyWhenInStock: boolean,
  ) {
    //update this specific user's wish list
  }

  @Post()
  addFavProduct(@Body('prodId', ParseIntPipe) prodId: number) {
    //add an item to the wishlist
  }
}
