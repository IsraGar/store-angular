import { Component, Input, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '@shared/services/product.service';
import { Product } from '@shared/models/Product.model';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, TimeAgoPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  private productService = inject(ProductService);
  private cartService = inject(CartService);
  @Input() id?: string;
  product = signal<Product | null>(null);
  cover = signal('');

  ngOnInit(){
    if(this.id){
      this.productService.getProductById(this.id).subscribe({
        next: (product) => {
          this.product.set(product);  
          if(product.images.length > 0){
            this.cover.set(product.images[0]);
          }
        }
      })
    }    
  }

  changeCover(newImage: string){
    this.cover.set(newImage);
  }

  addToCart(){
    const product = this.product();
    if(product){
      this.cartService.addToCart(product);
    }    
  }

}
