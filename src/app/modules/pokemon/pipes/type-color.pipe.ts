import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'typeColor'
})
export class TypeColorPipe implements PipeTransform {

  transform(pokemonType: string, pokemonName?: string): string {
    if (pokemonName === 'Pikachu') {
      return 'red'
    }
    switch (pokemonType) {
      case 'Electric':
        return 'gold'
      case 'Water':
        return '#1E90FF'
      case 'Fire':
        return '#ff621e'
      case 'Ground':
        return '#6e443a'
      case 'Psychic':
        return '#760eb4'
      default:
        return 'black';
    }
  }
}
