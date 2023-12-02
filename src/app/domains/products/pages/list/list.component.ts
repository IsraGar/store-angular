import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from "@products/components/product/product.component";
import { Product } from '@shared/models/Product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/Category.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  ngOnInit(){
    this.getProducts();
    this.getCategories();
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }

  private getProducts(){
    this.productService.getProducts().subscribe({
      next: (prodcuts) => {
        this.products.set(prodcuts);
      },
      error: () => {

      }
    });
  }

  private getCategories(){
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories.set(categories);
        
      },
      error: () => {

      }
    });
  }
}
