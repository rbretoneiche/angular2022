import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../../services/pokemon.service";
import {Observable} from "rxjs";
import {PokemonInterface} from "../../interfaces/pokemon.interface";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemonId?: string;
  pokemon$?: Observable<PokemonInterface>
  danger = 'J\'ai un script<script>alert("coucou")</script>'

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.pokemonId = this.route.snapshot.paramMap.get('id') || '';
    this.pokemon$ = this.pokemonService.getById(this.pokemonId)
  }
}
