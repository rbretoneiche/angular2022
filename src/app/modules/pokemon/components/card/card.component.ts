import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PokemonInterface} from "../../interfaces/pokemon.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() pokemon?: PokemonInterface
  @Input() selectedPokemon?: PokemonInterface
  @Input() isMine = false;
  @Output() selectedPokemonChanges = new EventEmitter<PokemonInterface>();
  @Output() catchPokemonEvent = new EventEmitter<PokemonInterface>();

  constructor(private router: Router) {
  }

  handleClick() {
    this.router.navigateByUrl(`/pokemon/${this.pokemon?.name}`)
    this.selectedPokemonChanges.emit(this.pokemon)
  }

  catch(event: Event) {
    event.stopPropagation();
    this.catchPokemonEvent.emit(this.pokemon)
  }
}
