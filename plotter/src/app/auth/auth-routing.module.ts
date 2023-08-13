import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProfileComponent} from "./profile/profile.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

const routes: Routes = [
  {path: 'signin', component:SignInComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'signup', component: SignUpComponent}
];

@NgModule({
  declarations:[
    SignInComponent,
    ProfileComponent,
    SignUpComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    NgIf,
  ],
  exports: [
    RouterModule,
  ],
})
export class AuthRoutingModule {
}
