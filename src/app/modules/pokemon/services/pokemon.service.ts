import {Injectable} from '@angular/core';
import {PokemonInterface} from "../interfaces/pokemon.interface";
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {environment} from "../../../../environments/environment";
import {AuthService} from "../../login/services/auth.service";
import {AlertService} from "../../../services/alert.service";
import {AlertEnum} from "../../../enums/alert.enum";
import {UserHasPokemonInterface} from "../interfaces/user-has-pokemon.interface";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private selectedPokemon?: PokemonInterface;

  constructor(private httpClient: HttpClient, private alertService: AlertService) {
  }

  getPokemon(): Observable<PokemonInterface[]> {
    return this.httpClient.get(`${environment.apiUrl}/items/pokemon`)
      .pipe(map((result: any) => result.data),
        tap((pokemonList: PokemonInterface[]) => this.alertService.info(`${pokemonList.length} ${AlertEnum.fetched}`)))
  }

  getSelectedPokemon(): PokemonInterface | undefined {
    return this.selectedPokemon;
  }

  selectPokemon(pokemon: PokemonInterface) {
    this.selectedPokemon = pokemon
  }

  ownPokemon(pokemon: PokemonInterface) {
    return this.httpClient.post(`${environment.apiUrl}/items/user_has_pokemon`, {pokemonId: pokemon.id})
      .pipe(map((result: any) => result.data))
  }

  getMyPokemons(): Observable<UserHasPokemonInterface[]> {
    return this.httpClient.get(`${environment.apiUrl}/items/user_has_pokemon`)
      .pipe(map((result: any) => result.data))
  }
}
