import { ShoppingCartItem } from "./shopping-cart-item";
import { Product } from "./products";

export class  ShoppingCart{
 //items:ShoppingCartItem[];
 items:ShoppingCartItem[]=[];
constructor(private itemsMap:{[productId:string]:ShoppingCartItem}){
  this.itemsMap = itemsMap|| {};
  
  for(let productId in itemsMap){
    let item=itemsMap[productId];
    let x=new ShoppingCartItem({
        // title:item.title,
        // imageUrl:item.imageUrl,
        // price:item.price
        ...item,
        $key:productId
    });
    this.items.push(x);
  } 
}
getQuantity(product:Product){
  let item = this.itemsMap[product.$key];
  return item ? item.quantity:0;
}
get productIds(){
  return  Object.keys(this.itemsMap);
}

get totalPrice(){
  let sum=0;
  for(let productId in this.items){
    sum+= this.items[productId].totalPrice;
  }
  return sum;
}

 get totalItemsCount(){
    let count=0;
    for(let productId in this.itemsMap){
      count+= this.itemsMap[productId].quantity
    }
    return count;
 }


}