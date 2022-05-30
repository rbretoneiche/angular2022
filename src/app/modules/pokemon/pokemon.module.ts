import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from "./components/card/card.component";
import {HoverBackgroundDirective} from "./directives/hover-background.directive";


@NgModule({
  declarations: [CardComponent,
    HoverBackgroundDirective,
  ],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonModule {
}
