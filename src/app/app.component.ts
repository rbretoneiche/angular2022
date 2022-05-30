import {Component, OnInit} from '@angular/core';
import {PokemonInterface} from "./interfaces/pokemon.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pokemons: PokemonInterface[] = [
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

  selectedPokemon?: PokemonInterface;

  ngOnInit(): void {
    this.selectedPokemon = this.pokemons[0]
  }

  handlePokemonChange(pokemon: PokemonInterface) {
    this.selectedPokemon = pokemon
  }
}
