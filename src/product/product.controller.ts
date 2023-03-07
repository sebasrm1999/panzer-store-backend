import { Controller, Get, Param, Req } from '@nestjs/common';
import { ProductService } from './product.service';
import { Request } from 'express';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('all')
  products(@Req() req: Request) {
    return this.productService.products(req.query.sort);
  }

  @Get(':id')
  productsById(@Param() params): object {
    return this.productService.productsById(params.id);
  }
}
