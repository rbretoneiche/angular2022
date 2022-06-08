import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthInterface, AuthService} from "../../services/auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  authData$?: Observable<AuthInterface>

  constructor(private authService: AuthService) {
  }

  submit() {
    this.authData$ = this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }
}
