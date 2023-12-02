import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/Product.model';
import { th } from 'date-fns/locale';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  constructor() { }

  getProducts(){
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products');
  }

  getProductById(id: string){
    return this.http.get<Product>('https://api.escuelajs.co/api/v1/products/' + id);
  }

  getProductByCategory(categoryId?: string){
    if(categoryId){
      return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/categories/'+ categoryId +'/products');
    }else{
      return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    }
  }

}
