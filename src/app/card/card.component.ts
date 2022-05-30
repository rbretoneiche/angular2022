import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  pokemonName = 'Pikachu'
  pokemonWeight = 600
  pokemonHeight = 40
  pokemonType = 'Electric'

}
