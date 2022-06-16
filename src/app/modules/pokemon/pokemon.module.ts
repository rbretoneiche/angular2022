import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from "./components/card/card.component";
import {HoverBackgroundDirective} from "./directives/hover-background.directive";
import {PokemonListComponent} from './components/pokemon-list/pokemon-list.component';
import {PokemonDetailComponent} from './components/pokemon-detail/pokemon-detail.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { TypeColorPipe } from './pipes/type-color.pipe';
import { PokemonHistoryComponent } from './components/pokemon-history/pokemon-history.component';
import { HistoryOneComponent } from './components/pokemon-history/components/history-one/history-one.component';
import { HistoryTwoComponent } from './components/pokemon-history/components/history-two/history-two.component';
import { HistoryThreeComponent } from './components/pokemon-history/components/history-three/history-three.component';


@NgModule({
  declarations: [
    CardComponent,
    HoverBackgroundDirective,
    PokemonListComponent,
    PokemonDetailComponent,
    TypeColorPipe,
    PokemonHistoryComponent,
    HistoryOneComponent,
    HistoryTwoComponent,
    HistoryThreeComponent,
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
