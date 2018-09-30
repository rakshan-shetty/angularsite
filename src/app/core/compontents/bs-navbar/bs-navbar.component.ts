import { Component, OnInit  } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { Observable } from 'rxjs';
import { AdminAuthGuardService } from '../../../admin/services/admin-auth-guard.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  isCollapsed = true;
  isAdmin;
  shoppingCartItemCount:number;
  cart$:Observable<ShoppingCart>

  constructor(public auth:AuthService, 
    private shoppingCartService:ShoppingCartService,
    private aAuthService:AdminAuthGuardService
    ) {
     // this.isAdmin= aAuthService.isAdmin;
     }
 
  
  async ngOnInit(){
  this.cart$=await this.shoppingCartService.getCart();
  this.aAuthService.isAdmincheck();
  } 

  logout(){
    this.auth.logout();
   }
}
