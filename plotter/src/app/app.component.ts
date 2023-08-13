import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BackendService} from "./services/backend.service";
import {Observable} from "rxjs";
import {CognitoService} from "./auth/cognito.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router: Router,
              private cognitoService: CognitoService) {
    this.isAuthenticated = false;
  }



  selectedStory:boolean = false;

   isAuthenticated: boolean;

  public ngOnInit(): void {
    this.cognitoService.isAuthenticated()
    .then((success: boolean) => {
      this.isAuthenticated = success;
    });
  }

  public signOut(): void {
    this.cognitoService.signOut()
    .then(() => {
      this.router.navigate(['/signIn']);
    });
  }


}
