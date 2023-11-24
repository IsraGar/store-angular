import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from "../../../products/components/product/product.component";
import { Product } from '../../../shared/models/Product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);

  constructor(){
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 100,
        image: 'https://picsum.photos/200/200?r=23',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 2',
        price: 200,
        image: 'https://picsum.photos/200/200?r=24',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 3',
        price: 300,
        image: 'https://picsum.photos/200/200?r=25',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 4',
        price: 400,
        image: 'https://picsum.photos/200/200?r=26',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 5',
        price: 500,
        image: 'https://picsum.photos/200/200?r=27',
        createdAt: new Date().toISOString()
      }
    ];
    this.products.set(initProducts);
  }

  fromChild(event: string){
    console.log('Estamos en el padre');
    console.log(event);        
  }
}
