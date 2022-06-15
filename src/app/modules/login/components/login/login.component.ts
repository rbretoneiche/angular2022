import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthInterface, AuthService} from "../../services/auth.service";
import {Observable} from "rxjs";
import {NotifierService} from "angular-notifier";
import {AlertService} from "../../../../services/alert.service";
import {AlertEnum} from "../../../../enums/alert.enum";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private alertService: AlertService, private authService: AuthService) {
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  authData$?: Observable<AuthInterface>

  async submit() {
    if (this.loginForm.valid) {
      this.authData$ = this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
    }
  }
}
