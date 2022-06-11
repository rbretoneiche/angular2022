import {Injectable} from '@angular/core';
import {PokemonInterface} from "../interfaces/pokemon.interface";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private selectedPokemon?: PokemonInterface;

  constructor(private httpClient: HttpClient) {
  }
  getPokemon(): Observable<PokemonInterface[]> {
    // @ts-ignore
    return this.httpClient.get(`${environment.apiUrl}/items/pokemon`).pipe(map(result => result.data))
  }

  getSelectedPokemon(): PokemonInterface | undefined {
    return this.selectedPokemon;
  }

  selectPokemon(pokemon: PokemonInterface) {
    this.selectedPokemon = pokemon
  }
}
