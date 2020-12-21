import { Controller, Post, Body, Get } from '@nestjs/common';
import { Productservice } from './Product.service';
@Controller('/product')
export class Productcontroller {
  constructor(private pproductservice: Productservice) {}
  @Post()
  addpproduct(
    @Body('title') probTitle: string,
    @Body('description') probDesc: string,
    @Body('price') probPrice: number,
  ): any {
    const generatedId = this.pproductservice.insertpproduct(
      probTitle,
      probPrice,
      probDesc,
    );
    return { id: generatedId };
  }
  @Get()
  getAllPproducts() {
    return this.pproductservice.getpproducts();
  }
}
