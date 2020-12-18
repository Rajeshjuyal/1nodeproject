import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  products: Product[] = [];
  insertProduct(prod: Product) {
    const prodId = new Date().toString();
    const newProduct = new Product(prodId, prod.title, prod.desc, prod.price);
    this.products.push(newProduct);
    return prodId;
  }

  findAll() {
    return this.products[0].title;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
