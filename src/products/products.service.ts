import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
const fs = require('fs');
const path = require('path');

@Injectable()
export class ProductsService {
  constructor(private productsRepo: ProductsRepository) {}

  async getBySort(
    sortCondition: 'low-to-high' | 'high-to-low' | 'popular' | 'rated',
  ) {
    let products;
    if (sortCondition === 'low-to-high') {
      products = await this.productsRepo.query(`CALL low_to_high_price()`);
    } else if (sortCondition === 'high-to-low') {
      products = await this.productsRepo.query(`CALL high_to_low_price()`);
    } else if (sortCondition === 'popular') {
      products = await this.productsRepo.query(`CALL most_popular()`);
    } else if (sortCondition === 'rated') {
      products = await this.productsRepo.query(`CALL most_rated()`);
    } else {
      return await this.getAll();
    }

    const mappedProducts = products[0].map((product) => {
      const pianoImgs = fs.readdirSync(
        path.dirname(__dirname).split('\\dist')[0] +
          `\\public\\images\\pianos\\${product.id}`,
      );
      return { ...product, img: pianoImgs[0] };
    });
    return mappedProducts;
  }

  async getByCategory(categoryId: number) {
    const products = await this.productsRepo.query(
      `select * from products where category_id = ${categoryId}`,
    );
    const mappedProducts = products.map((product) => {
      const pianoImgs = fs.readdirSync(
        path.dirname(__dirname).split('\\dist')[0] +
          `\\public\\images\\pianos\\${product.id}`,
      );
      return { ...product, img: pianoImgs[0] };
    });
    return mappedProducts;
  }

  async getById(id: number) {
    const product = await this.productsRepo.query(
      `select * from products where id = ?`,
      [id],
    );
    const productImgs = fs.readdirSync(
      path.dirname(__dirname).split('\\dist')[0] +
        `\\public\\images\\pianos\\${id}`,
    );
    return { ...product[0], imgs: productImgs };
  }

  async getAll() {
    const products = await this.productsRepo.query(`select * from products`);
    const mappedProducts = products.map((product) => {
      const pianoImgs = fs.readdirSync(
        path.dirname(__dirname).split('\\dist')[0] +
          `\\public\\images\\pianos\\${product.id}`,
      );
      return { ...product, img: pianoImgs[0] };
    });
    return mappedProducts;
  }
}
