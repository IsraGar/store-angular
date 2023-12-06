import { Component, signal, inject, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from "@products/components/product/product.component";
import { Product } from '@shared/models/Product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/Category.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  @Input() categoryId?: string;

  ngOnInit(){
    this.getProducts();
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges){    
    const categoryId = changes['categoryId'];    
    if(categoryId){
      this.getProductsByCategory(categoryId.currentValue);
    }else{
      this.getProducts();
    }
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

  private getProductsByCategory(categoryId: string){
    this.productService.getProductByCategory(categoryId).subscribe({
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
