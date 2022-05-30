import {Injectable} from '@angular/core';
import {PokemonInterface} from "../interfaces/pokemon.interface";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private selectedPokemon?: PokemonInterface;
  private pokemons: PokemonInterface[] = [
    {
      name: 'Pikachu',
      height: 40,
      image: 'assets/pikachu.png',
      weight: 600,
      type: 'Electric'
    },
    {
      name: 'Bulbasaur',
      height: 70,
      image: 'assets/bulbi.svg',
      weight: 690,
      type: 'Grass'
    }
  ]

  getPokemon(): PokemonInterface[] {
    return this.pokemons;
  }

  getSelectedPokemon(): PokemonInterface | undefined {
    return this.selectedPokemon;
  }

  selectPokemon(pokemon: PokemonInterface) {
    this.selectedPokemon = pokemon
  }
}
