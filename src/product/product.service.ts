import { Injectable } from "@nestjs/common";

@Injectable({})
export class ProductService {
    products(){
        return [{id : '1'}, {id : '2'}];
    }

    productsById(){
        return {id : '1'};
    }
}