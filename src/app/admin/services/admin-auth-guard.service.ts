import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import {map, switchMap} from 'rxjs/operators' 
import { AuthService } from 'shared/services/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserService } from 'shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService  implements CanActivate {
  isAdmin;
  constructor( private router:Router, private auth:AuthService, private userService:UserService) {
   }
   isAdmincheck(){
    this.auth.roles$.pipe(map(roles=>{
      console.log(roles)
      // this.auth.user$.subscribe(user=>{
      //     console.log(roles[0][user.uid]) 
      // }) 
    
    }))
   }
  canActivate(){
    //   return this.auth.roles$.pipe(map(roles=>{
    //   this.auth.user$.subscribe(user=>{
    //       this.isAdmin= roles[0][user.uid];
    //   })
    
    // }))

  return true;
  
  // return this.auth.user$
  // .pipe(
  //   switchMap(user => this.userService.get(user.uid)),    
  //   map(appUser => appUser.isAdmin)
  //   )
   }
}
