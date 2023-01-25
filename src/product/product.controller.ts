import { Controller, Get, Post } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService){}

    @Get('all')
    products() {
        return this.productService.products();
    }

    @Post('product')
    productsById() {
        return this.productService.productsById();
    }
}