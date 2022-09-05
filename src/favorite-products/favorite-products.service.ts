import { Injectable, Session } from '@nestjs/common';

@Injectable()
export class FavoriteProductsService {
  deleteProduct(@Session() session: Record<string, any>, prodId: number) {
    const userId = session.user.id;
  }

  getProducts(@Session() session: Record<string, any>) {
    const userId = session.user.id;
  }
  updateProduct(
    @Session() session: Record<string, any>,
    notifyWhenInStock: boolean,
  ) {
    const userId = session.user.id;
  }

  addProduct(@Session() session: Record<string, any>, prodId: number) {
    const userId = session.user.id;
  }
}
