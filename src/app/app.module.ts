import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PokemonModule} from "./modules/pokemon/pokemon.module";
import {RouterModule} from "@angular/router";
import {PokemonListComponent} from "./modules/pokemon/components/pokemon-list/pokemon-list.component";
import {PokemonDetailComponent} from "./modules/pokemon/components/pokemon-detail/pokemon-detail.component";
import {LoginComponent} from "./modules/login/components/login/login.component";
import {LoginModule} from "./modules/login/login.module";
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
        path: 'pokemon/:name',
        component: PokemonDetailComponent,
      },
      {
        path: 'accueil',
        component: PokemonListComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {path: '', redirectTo: 'accueil', pathMatch: 'full'},
      {path: '**', redirectTo: 'accueil'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
