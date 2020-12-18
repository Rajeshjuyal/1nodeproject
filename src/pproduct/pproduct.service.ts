import { Injectable } from '@nestjs/common';
import { pproduct } from './pproduct.model';
@Injectable()
export class pproductservice {
  pproducts: pproduct[] = [];
  insertpproduct(title: string, price: number, description: string) {
    const newproduct = new pproduct(
      new Date().toString(),
      title,
      description,
      price,
    );
    this.pproducts.push(newproduct);
    return newproduct.id;
  }
}
