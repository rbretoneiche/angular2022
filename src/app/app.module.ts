import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PokemonModule} from "./modules/pokemon/pokemon.module";
import {RouterModule} from "@angular/router";
import {PokemonListComponent} from "./modules/pokemon/components/pokemon-list/pokemon-list.component";
import {PokemonDetailComponent} from "./modules/pokemon/components/pokemon-detail/pokemon-detail.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    PokemonModule,
    RouterModule.forRoot([
      {
        path: 'pokemon/:name',
        component: PokemonDetailComponent
      },
      {
        path: '',
        component: PokemonListComponent
      }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
