import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() pokemonName = 'Pikachu'
  @Input() pokemonWeight = 600
  @Input() pokemonHeight = 40
  @Input() pokemonType = 'Electric'
  @Input() pokemonImage = 'assets/pikachu.png'

}
