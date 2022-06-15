import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NotifierService} from "angular-notifier";
import {AlertService} from "../../../../services/alert.service";
import {AlertEnum} from "../../../../enums/alert.enum";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private alertService: AlertService) {
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  submit() {
    if (this.loginForm.valid) {
      this.alertService.success(AlertEnum.welcome);
    }
  }
}
