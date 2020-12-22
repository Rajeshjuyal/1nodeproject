import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './Product.model';
@Injectable()
export class Productservice {
  private pproducts: Product[] = [];
   insertpproduct(prod: Product) {
    const probId = Date.now.toString();
    prod.id = '5';
    console.log(prod);
    const newproduct = new Product(
      prod.id,
      prod.title,
      prod.description,
      prod.price,
    );
    console.log(newproduct);
    this.pproducts.push(newproduct);
    return newproduct.title;
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
