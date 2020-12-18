import { Controller, Post, Body } from '@nestjs/common';
import { pproductservice } from './pproduct.service';
@Controller('pproduct')
export class pproductcontroller {
  constructor(private pproductservice: pproductservice) {}
  @Post()
  addpproduct(
    @Body('title') probTitle: string,
    @Body('description') probDesc: string,
    @Body('price') probPrice: number,
  ): any {
    const generatedId=this.pproductservice.insertpproduct(probTitle, probPrice, probDesc);
    return{id : generatedId};
  }
}
