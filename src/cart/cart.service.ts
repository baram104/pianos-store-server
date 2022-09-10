import { Injectable, Session } from '@nestjs/common';
import { AddProductDto } from './add-product-dto';
import { CartsRepository } from './carts.repository';

@Injectable()
export class CartService {
  constructor(private cartsRep: CartsRepository) {}
  async getCartById(session) {
    const userId = session.user.id;
    return await this.cartsRep.query(
      `select * from carts c join products p on c.product_id = p.id where c.user_id =?`,
      [userId],
    );
  }

  async addProductToCart(product: AddProductDto, session) {
    const userId = session.user.id;
    const data = {
      productId: product.prodId,
      quantity: product.quantity,
      user: userId,
    };
    await this.cartsRep.save(data);
  }

  async updateProductQuantity(prodId: number, quantity: number, session) {
    const userId = session.user.id;
    const data = { user: userId, productId: prodId, quantity: quantity };
    const cart = await this.cartsRep.update(
      {
        productId: prodId,
        user: userId,
      },
      {
        quantity: quantity,
      },
    );
  }

  async deleteProduct(prodId: number, session) {
    await this.cartsRep.delete({ productId: prodId, user: session.user.id });
  }
}
