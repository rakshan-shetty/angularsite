import { Component } from '@angular/core';
import { CategoryService } from 'shared/services/category.service';
import { ProductService } from 'shared/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import { Product } from 'shared/models/products';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent  {
//categories$;
//  ptitle?:string;
//  price?:number;
//  category?:string;
//  imageUrl?:string;

categories;
product={};

id;

  constructor(
    private router:Router,
    private categorySevice: CategoryService,
     private productService:ProductService,
     private route:ActivatedRoute
     ) {
     //this.categories$=this.categorySevice.getCategories();
     this.categorySevice.getCategories()
     .subscribe(categories=>{
        this.categories=categories;
    });
  this.id= this.route.snapshot.paramMap.get('id');
   if(this.id){
     this.productService.getProduct(this.id).subscribe(p=> this.product=p );
   }
  }
save(product ){
  if(this.id){
      this.productService.updateProduct(this.id, product);
  }
  else{
    this.productService.create(product);
  }
  this.router.navigate(['/admin/products']);
}
delete(){
  if(confirm("are you sure you want to delete this product?")){
    this.productService.deleteProduct(this.id);
  this.router.navigate(['/admin/products']);

  }
}
 

}
