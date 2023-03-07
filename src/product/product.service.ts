import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { catchError, map } from 'rxjs';

@Injectable({})
export class ProductService {
  constructor(private httpService: HttpService) {}
  private url = 'https://fakestoreapi.com/products';

  async products(options) {
    return this.httpService
      .get(`${this.url}`, {
        headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
      })
      .pipe(
        map((res) => {
          if (options) {
            const sortArray = res.data.sort((a, b) =>
              options === 'desc'
                ? a.price < b.price
                  ? 1
                  : a.price > b.price
                  ? -1
                  : 0
                : a.price > b.price
                ? 1
                : a.price < b.price
                ? -1
                : 0,
            );
            return sortArray;
          } else {
            return res.data;
          }
        }),
      )
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );
  }

  productsById(id: string) {
    return this.httpService
      .get(`${this.url}/${id}`, {
        headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
      })
      .pipe(map((res) => res.data))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );
  }
}
