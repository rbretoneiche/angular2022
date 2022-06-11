import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {PokemonInterface} from "../../interfaces/pokemon.interface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {
  }

  pokemons$?: Observable<PokemonInterface[]>;
  selectedPokemon?: PokemonInterface;
  trackByIdentity = (index: number, item: PokemonInterface) => item.id;

  ngOnInit(): void {
    this.pokemons$ = this.pokemonService.getPokemon();
  }

  handlePokemonChange(pokemon: PokemonInterface) {
    this.pokemonService.selectPokemon(pokemon);
    this.selectedPokemon = this.pokemonService.getSelectedPokemon()
  }

}
