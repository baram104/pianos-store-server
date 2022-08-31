import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';

@Controller('favorite-products')
export class FavoriteProductsController {
  @Delete(':userId/:prodId')
  deleteProductFromFavProducts(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('prodId', ParseIntPipe) prodId: number,
  ) {
    //guard
    //remove this product from this wishlist
  }

  @Get(':userId')
  getUserFavProducts(@Param('userId', ParseIntPipe) userId: number) {
    //guard
    //get wish list of a user
  }

  @Put(':userId')
  updateUserFavProducts(@Param('userId', ParseIntPipe) userId: number) {
    //guard
    //update this specific user's wish list
  }
}
