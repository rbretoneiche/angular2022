import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PokemonInterface} from "../interfaces/pokemon.interface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() pokemon?: PokemonInterface
  @Input() selectedPokemon?: PokemonInterface
  @Output() selectedPokemonChanges = new EventEmitter<PokemonInterface>();

  handleClick() {
    this.selectedPokemonChanges.emit(this.pokemon)
  }
}
