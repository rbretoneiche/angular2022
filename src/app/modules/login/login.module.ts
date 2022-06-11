import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from './components/login/login-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login.component";


@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: 'login',
      component: LoginComponent,
      children: [
        {
          path: '',
          component: LoginFormComponent
        },
        {path: '**', redirectTo: ''}
      ]
    }])
  ]
})
export class LoginModule {
}
