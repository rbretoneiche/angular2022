import {Component, OnInit} from '@angular/core';
import {PokemonInterface} from "./interfaces/pokemon.interface";
import {PokemonService} from "./services/pokemon.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {
  }

  pokemons?: PokemonInterface[];
  selectedPokemon?: PokemonInterface;
  pokemon!:PokemonInterface
  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemon();
  }

  handlePokemonChange(pokemon: PokemonInterface) {
    this.pokemonService.selectPokemon(pokemon);
    this.selectedPokemon = this.pokemonService.getSelectedPokemon()
  }
  doSomething(){}
}
