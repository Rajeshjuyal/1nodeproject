import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './Product.model';
@Injectable()
export class Productservice {
  private pproducts: Product[] = [];
  insertpproduct(title: string, price: number, description: string) {
    const probId = Math.random.toString();
    const newproduct = new Product(
      new Date().toString(),
      title,
      description,
      price,
    );
    this.pproducts.push(newproduct);
    return newproduct.id;
  }
  getpproducts() {
    return [...this.pproducts];
  }
  getSinglepproduct(pproductId: String) {
    const product = this.pproducts.find((prob) => prob.id === pproductId);
    if (!product) {
      throw new NotFoundException('Could not find product');
    }

    return { ...this.pproducts };
  }
}
