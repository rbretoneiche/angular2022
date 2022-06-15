import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {PokemonInterface} from "../../interfaces/pokemon.interface";
import {forkJoin, map, Observable} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../../../login/services/auth.service";
import {AlertService} from "../../../../services/alert.service";
import {AlertEnum} from "../../../../enums/alert.enum";
import {UserHasPokemonInterface} from "../../interfaces/user-has-pokemon.interface";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  constructor(private pokemonService: PokemonService, private authService: AuthService, private router: Router) {
  }

  pokemons$?: Observable<PokemonInterface[]>;
  myPokemons$?: Observable<string[]>;
  selectedPokemon?: PokemonInterface;
  trackByIdentity = (index: number, item: PokemonInterface) => item.id;

  ngOnInit(): void {
    this.pokemons$ = this.pokemonService.getPokemon();
    this.refreshMyPokemons()
  }

  handlePokemonChange(pokemon: PokemonInterface) {
    this.pokemonService.selectPokemon(pokemon);
    this.selectedPokemon = this.pokemonService.getSelectedPokemon()
  }

  handleCatchPokemon(pokemon: PokemonInterface) {
    this.pokemonService.ownPokemon(pokemon).subscribe(() => {
      this.refreshMyPokemons()
    })
  }

  refreshMyPokemons(): void {
    this.myPokemons$ = this.pokemonService.getMyPokemons().pipe(map(pokemons => pokemons.map(pokemon => pokemon.pokemonId)));
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
