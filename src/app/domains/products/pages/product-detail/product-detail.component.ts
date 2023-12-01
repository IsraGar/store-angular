import { Component, Input, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '@shared/services/product.service';
import { Product } from '@shared/models/Product.model';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, TimeAgoPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  private productService = inject(ProductService);
  @Input() id?: string;
  product = signal<Product | null>(null);

  ngOnInit(){
    if(this.id){
      this.productService.getProductById(this.id).subscribe({
        next: (product) => {
          this.product.set(product);
          console.log(product);
               
        }
      })
    }
    
  }

}
