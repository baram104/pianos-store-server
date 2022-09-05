import { Injectable, Session } from '@nestjs/common';
import { AddProductDto } from './add-product-dto';

@Injectable()
export class CartService {
  getCartById(@Session() session: Record<string, any>) {
    const userId = session.user.id;
    //return cart from data base by user id
  }

  addProductToCart(
    product: AddProductDto,
    @Session() session: Record<string, any>,
  ) {
    const userId = session.user.id;
    //add product to cart by user id with all the details
  }

  updateProductQuantity(
    quantity: number,
    @Session() session: Record<string, any>,
  ) {
    const userId = session.user.id;
    //update this product with the new quantity
  }
}
