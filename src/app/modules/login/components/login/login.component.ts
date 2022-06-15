import {Component, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthInterface, AuthService} from "../../services/auth.service";
import {Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertService} from "../../../../services/alert.service";
import {AlertEnum} from "../../../../enums/alert.enum";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  constructor(private alertService: AlertService, private authService: AuthService, private router: Router) {
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  authSubscription$?: Subscription

  async submit() {
    if (this.loginForm.valid) {
      this.authSubscription$ = this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe(authData => {
            if (authData) {
              this.router.navigateByUrl('/')
            }
          }
        )
    }
  }

  ngOnDestroy(): void {
    this.authSubscription$?.unsubscribe();
  }
}
