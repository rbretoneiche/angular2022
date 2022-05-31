import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from "./components/card/card.component";
import {HoverBackgroundDirective} from "./directives/hover-background.directive";
import {PokemonListComponent} from './components/pokemon-list/pokemon-list.component';
import {PokemonDetailComponent} from './components/pokemon-detail/pokemon-detail.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    CardComponent,
    HoverBackgroundDirective,
    PokemonListComponent,
    PokemonDetailComponent,
  ],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ]
})
export class PokemonModule {
}
