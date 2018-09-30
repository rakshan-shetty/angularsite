import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/observable';
import { UserService } from 'shared/services/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
roles$;
user$:Observable<firebase.User>;
returnUrl;
  constructor(private afAuth:AngularFireAuth, 
    private route:ActivatedRoute,
     private userService:UserService, 
     private db:AngularFireDatabase) {


    this.user$=afAuth.authState;// to know if user is logged in or not returns null if false
    
    this.roles$=db.list('/roles');

    // db.list('/roles')
    // .subscribe(roles=>{ 
    //  this.roles=roles;
    //  console.log(roles);
    // });
    
   }
   login(){
    let returnUrl= this.route.snapshot.queryParamMap.get('returnUrl')||"/";
    localStorage.setItem("returnUrl",returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
   }
   logout(){
     this.afAuth.auth.signOut()
   }

}
