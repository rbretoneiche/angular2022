import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthInterface, AuthService} from "../../services/auth.service";
import {Observable} from "rxjs";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  authData$?: Observable<AuthInterface>

  constructor(private notifierService: NotifierService, private authService: AuthService) {
  }

  submit() {
    if (this.loginForm.valid) {
      this.authData$ = this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
    }
  }
}
