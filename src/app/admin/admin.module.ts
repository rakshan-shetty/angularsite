import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from 'shared/services/auth-guard.service';
import { SharedModule } from 'shared/shared.module';

import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      
      {
        path:"admin/products/new",
        component:ProductFormComponent, 
        canActivate:[AuthGuardService]
      },
      {
        path:"admin/products/:id",
        component:ProductFormComponent, 
        canActivate:[AuthGuardService]
      },
      {
        path:"admin/products",
        component:AdminProductsComponent, 
        canActivate:[AuthGuardService, AdminAuthGuardService]
      },
      {
        path:"admin/orders", 
        component:AdminOrdersComponent, 
        canActivate:[AuthGuardService, AdminAuthGuardService]
      },
    ])

  ],
  declarations: [
    AdminProductsComponent, 
    AdminOrdersComponent, 
    ProductFormComponent,
  ]
})
export class AdminModule { }
