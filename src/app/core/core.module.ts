import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

import { BsNavbarComponent } from './compontents/bs-navbar/bs-navbar.component';
import { HomeComponent } from './compontents/home/home.component';
import { LoginComponent } from './compontents/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [
    BsNavbarComponent, 
    HomeComponent, 
    LoginComponent],
    exports:[BsNavbarComponent]
})
export class CoreModule { }
