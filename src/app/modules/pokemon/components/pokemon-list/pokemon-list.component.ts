import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {PokemonInterface} from "../../interfaces/pokemon.interface";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../../../login/services/auth.service";
import {AlertService} from "../../../../services/alert.service";
import {AlertEnum} from "../../../../enums/alert.enum";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  constructor(private pokemonService: PokemonService, private authService: AuthService, private router: Router) {
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

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
