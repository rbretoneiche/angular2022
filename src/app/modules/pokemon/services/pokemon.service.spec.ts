import {fakeAsync, TestBed} from '@angular/core/testing';
import {PokemonService} from "./pokemon.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {PokemonInterface} from "../interfaces/pokemon.interface";


describe('PokemonService', () => {
  let service: PokemonService;
  let pokemons: PokemonInterface[] = [];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', fakeAsync(() => {
    expect(service).toBeTruthy();
    service.getPokemon().subscribe((_pokemons) => {
      expect(pokemons).toEqual([
        {
          "name": "Abra",
          "height": 0.9,
          "weight": 19.5,
          "picture": "https://www.pokepedia.fr/images/thumb/3/36/Abra-RFVF.png/250px-Abra-RFVF.png",
          "type": "Psychic"
        },
        {
          "name": "Voltorb",
          "height": 0.5,
          "weight": 10.4,
          "picture": "https://archives.bulbagarden.net/media/upload/thumb/d/da/100Voltorb.png/250px-100Voltorb.png",
          "type": "Electric"
        },
        {
          "name": "Magneton",
          "height": 1,
          "weight": 60,
          "picture": "https://www.pokepedia.fr/images/thumb/3/36/Magn%C3%A9ton-RFVF.png/250px-Magn%C3%A9ton-RFVF.png",
          "type": "Electric"
        },
        {
          "name": "Meowth",
          "height": 0.4,
          "weight": 4.2,
          "picture": "https://www.pokepedia.fr/images/thumb/b/b8/Miaouss-RFVF.png/250px-Miaouss-RFVF.png",
          "type": "Normal"
        },
        {
          "name": "Koffing",
          "height": 0.6,
          "weight": 1,
          "picture": "https://www.pokepedia.fr/images/thumb/5/53/Smogo-RFVF.png/250px-Smogo-RFVF.png",
          "type": "Poison"
        },
        {
          "name": "Pikachu",
          "height": 0.4,
          "weight": 6,
          "picture": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
          "type": "Electric"
        },
        {
          "name": "Haunter",
          "height": 1.6,
          "weight": 0.1,
          "picture": "https://www.pokepedia.fr/images/thumb/0/09/Spectrum-RFVF.png/250px-Spectrum-RFVF.png",
          "type": "Ghost"
        },
        {
          "name": "Bulbasaur",
          "height": 0.7,
          "weight": 6.9,
          "picture": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          "type": "Grass"
        },
        {
          "name": "Machop",
          "height": 0.8,
          "weight": 19.5,
          "picture": "https://www.pokepedia.fr/images/thumb/7/75/Machoc-RFVF.png/250px-Machoc-RFVF.png",
          "type": "Fighting"
        },
        {
          "name": "Mewtwo",
          "height": 2,
          "weight": 122,
          "picture": "https://archives.bulbagarden.net/media/upload/thumb/7/78/150Mewtwo.png/250px-150Mewtwo.png",
          "type": "Psychic"
        },
        {
          "name": "Tentacool",
          "height": 0.9,
          "weight": 45.5,
          "picture": "https://www.pokepedia.fr/images/thumb/d/de/Tentacool-RFVF.png/250px-Tentacool-RFVF.png",
          "type": "Water"
        },
        {
          "name": "Vulpix",
          "height": 0.6,
          "weight": 9.9,
          "picture": "https://www.pokepedia.fr/images/thumb/f/f6/Goupix-RFVF.png/250px-Goupix-RFVF.png",
          "type": "Fire"
        },
        {
          "name": "Staryu",
          "height": 0.8,
          "weight": 34.5,
          "picture": "https://www.pokepedia.fr/images/thumb/3/34/Stari-RFVF.png/250px-Stari-RFVF.png",
          "type": "Water"
        },
        {
          "name": "Rattata",
          "height": 0.3,
          "weight": 3.5,
          "picture": "https://www.pokepedia.fr/images/thumb/9/9e/Rattata-RFVF.png/250px-Rattata-RFVF.png",
          "type": "Normal"
        },
        {
          "name": "Diglett",
          "height": 0.2,
          "weight": 0.8,
          "picture": "https://www.pokepedia.fr/images/a/aa/Taupiqueur-RFVF.png",
          "type": "Ground"
        },
        {
          "name": "Mew",
          "height": 0.4,
          "weight": 4,
          "picture": "https://archives.bulbagarden.net/media/upload/thumb/b/b1/151Mew.png/250px-151Mew.png",
          "type": "Psychic"
        },
        {
          "name": "Charmender",
          "height": 0.6,
          "weight": 8.5,
          "picture": "https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/250px-Salam%C3%A8che-RFVF.png",
          "type": "Fire"
        },
        {
          "name": "Squirtle",
          "height": 0.5,
          "weight": 9,
          "picture": "https://www.pokepedia.fr/images/thumb/c/cc/Carapuce-RFVF.png/250px-Carapuce-RFVF.png",
          "type": "Water"
        }
      ]);
    })
  }));
});
