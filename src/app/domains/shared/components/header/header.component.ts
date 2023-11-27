import { Component, signal, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/Product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  @Input({required: true}) cart: Product[] = [];
  total: number = 0;

  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState);
  }

  ngOnChanges(){
    this.getTotalAmount();
  }

  getTotalAmount(): number{
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}
