import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'shared/services/product.service';
import { CategoryService } from 'shared/services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'shared/models/products';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Subscription, Observable } from 'rxjs';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[]=[];
  category;
  filteredProduct:Product[]=[];
  cart$: Observable<ShoppingCart>
  // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor(
    private productService:ProductService, 
    private route:ActivatedRoute,
    private shoppingCartService:ShoppingCartService) {

    
   }

  async ngOnInit() {
    this.populateProduct();
    this.cart$ =await this.shoppingCartService.getCart()
  }
  
  private populateProduct(){
    this.productService.getAll().subscribe(products=>{
      this.products=products;

      this.route.queryParamMap.subscribe(params=>{
        this.category=params.get('category')
        this.applyFilter();
       })
    })
  }

  private applyFilter(){
    this.filteredProduct=(this.category)?
    this.products.filter(p=>p.category===this.category):
    this.products;
  }

}
