import { Controller, Get, Param, Req } from "@nestjs/common";
import { Request } from "express";
import { ProductService } from "./product.service";

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService){}

    @Get('all')
    products() {
        return this.productService.products();
    }

    @Get(':id')
    productsById(@Param() params): object {
        return this.productService.productsById(params.id);
    }
}