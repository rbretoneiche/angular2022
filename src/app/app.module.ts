import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PokemonModule} from "./modules/pokemon/pokemon.module";
import {RouterModule} from "@angular/router";
import {PokemonListComponent} from "./modules/pokemon/components/pokemon-list/pokemon-list.component";
import {PokemonDetailComponent} from "./modules/pokemon/components/pokemon-detail/pokemon-detail.component";
import {LoginFormComponent} from "./modules/login/components/login/login-form.component";
import {LoginModule} from "./modules/login/login.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./modules/login/interceptors/auth.interceptor";
import {IsAuthenticatedGuard} from "./guards/is-authenticated.guard";
import {IsNotAuthenticatedGuard} from "./guards/is-not-authenticated.guard";
import {ErrorInterceptor} from "./modules/login/interceptors/error.interceptor";
import {NotifierModule} from "angular-notifier";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NotifierModule,
    PokemonModule,
    LoginModule,
    RouterModule.forRoot([
      {
        path: 'login',
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
        canActivate: [IsNotAuthenticatedGuard]
      },
      {
        path: 'pokemon/:name',
        component: PokemonDetailComponent,
        canActivate: [IsAuthenticatedGuard]
      },
      {
        path: 'accueil',
        component: PokemonListComponent,
        canActivate: [IsAuthenticatedGuard]
      },
      {path: '', redirectTo: 'accueil', pathMatch: 'full'},
      {path: '**', redirectTo: 'accueil'},
    ])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
