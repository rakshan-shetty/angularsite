import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db:AngularFireDatabase,
     private shoppingCartService:ShoppingCartService) { 

  }

  async placeOrder(orders){
    let result= await this.db.list('/orders').push(orders);
    this.shoppingCartService.clearCart();
    return result;
   }

  getOrders(){
   return  this.db.list('/orders');
  }
  
  getOrderByUser(userId:string){
   return this.db.list('/orders',{
      query:{
        orderByChild:'userId',
        equalTo:userId
      }
    })
  }
}
