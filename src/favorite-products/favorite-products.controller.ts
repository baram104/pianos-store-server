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
} from '@nestjs/common';

@Controller('favorite-products')
export class FavoriteProductsController {
  @Delete(':prodId')
  deleteProductFromFavProducts(@Param('prodId', ParseIntPipe) prodId: number) {
    //guard
    //remove this product from this wishlist
  }

  @Get()
  getUserFavProducts() {
    //guard
    //get wish list of a user
  }

  @Put(':prodId')
  updateUserFavProducts(
    @Param('prodId', ParseIntPipe) prodId: number,
    @Body('notifyWhenInStock', ParseBoolPipe) notifyWhenInStock: boolean,
  ) {
    //guard
    //update this specific user's wish list
  }

  @Post()
  addFavoriteProduct(@Body('prodId', ParseIntPipe) prodId: number) {
    //guard
    //add an item to the wishlist
  }
}
