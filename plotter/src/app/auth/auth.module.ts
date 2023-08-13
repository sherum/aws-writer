import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from "./auth-routing.module";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {ProfileComponent} from "./profile/profile.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
