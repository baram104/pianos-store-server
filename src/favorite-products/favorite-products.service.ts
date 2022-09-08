import { Injectable, Session } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { FavoriteProductsRepository } from './favorite-products.repository';

@Injectable()
export class FavoriteProductsService {
  constructor(
    private favProductsRepo: FavoriteProductsRepository,
    private productsService: ProductsService,
  ) {}

  async deleteProduct(session, prodId: number) {
    const userId = session.user.id;
    const product = await this.productsService.getById(prodId);
    await this.favProductsRepo.delete({ user: userId, product });
  }

  async getProducts(session) {
    const userId = session.user.id;
    return await this.favProductsRepo.find({ where: { user: userId } });
  }

  async updateProduct(session, notifyWhenInStock: number, prodId: number) {
    const userId = session.user.id;
    const product = await this.productsService.getById(prodId);
    await this.favProductsRepo.update(
      { user: userId, product },
      { notifyWhenInStock: notifyWhenInStock },
    );
  }

  async addProduct(session, prodId: number) {
    const userId = session.user.id;
    const product = await this.productsService.getById(prodId);
    const favProduct = { user: userId, product, productId: prodId };
    await this.favProductsRepo.save(favProduct);
  }
}
