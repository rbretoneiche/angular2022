import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthInterface, AuthService} from "../../services/auth.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  authData$?: Observable<AuthInterface>

  constructor(private authService: AuthService, private router: Router) {
  }

  submit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(data => {
        if (data) {
          this.router.navigateByUrl('/')
        }
      })
    }
  }
}
