import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ForbiddenException } from "@nestjs/common/exceptions";
import { Logger } from "@nestjs/common/services";
import { catchError, firstValueFrom, map } from "rxjs";

@Injectable({})
export class ProductService {
    constructor(private httpService: HttpService){}
    private url: string = 'https://fakestoreapi.com/';

    async products(){
        return this.httpService
        .get(`${this.url}products?limit=5`, {headers: { "Accept-Encoding": "gzip,deflate,compress" }})
        .pipe(
            map(res => res.data),
        )
        .pipe(
            catchError(() => {
                throw new ForbiddenException('API not available');
            }),
        )
    }

    productsById(){
        return {id : '1'};
    }
}