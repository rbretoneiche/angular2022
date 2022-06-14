import {TestBed} from '@angular/core/testing';
import {PokemonService} from "./pokemon.service";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "../../login/services/auth.service";

const mockResponse = [
  {
    "id": "0172382e-b9cc-4e4e-9398-75fdbf9ba485",
    "name": "Abra",
    "height": 0.9,
    "weight": 19.5,
    "picture": "https://www.pokepedia.fr/images/thumb/3/36/Abra-RFVF.png/250px-Abra-RFVF.png",
    "type": "Psychic"
  },
  {
    "id": "0405a0d9-6132-4e1e-a19c-7596261c9b5a",
    "name": "Voltorb",
    "height": 0.5,
    "weight": 10.4,
    "picture": "https://archives.bulbagarden.net/media/upload/thumb/d/da/100Voltorb.png/250px-100Voltorb.png",
    "type": "Electric"
  },
  {
    "id": "06c8805e-5157-4dde-9aa9-0f7dad920e4b",
    "name": "Marisson",
    "height": 0.4,
    "weight": 9,
    "picture": "https://www.pokemontrash.com/pokedex/images/sugimori/650.png",
    "type": "Grass"
  },
  {
    "id": "20f1fa4e-ad70-42c7-8b8d-c433971ea18d",
    "name": "Magneton",
    "height": 1,
    "weight": 60,
    "picture": "https://www.pokepedia.fr/images/thumb/3/36/Magn%C3%A9ton-RFVF.png/250px-Magn%C3%A9ton-RFVF.png",
    "type": "Electric"
  },
  {
    "id": "23107042-4a5c-4aaa-bf4f-c0e41d61fead",
    "name": "Meowth",
    "height": 0.4,
    "weight": 4.2,
    "picture": "https://www.pokepedia.fr/images/thumb/b/b8/Miaouss-RFVF.png/250px-Miaouss-RFVF.png",
    "type": "Normal"
  },
  {
    "id": "2bfcb6c6-f822-45aa-be64-9854bb8f5433",
    "name": "Koffing",
    "height": 0.6,
    "weight": 1,
    "picture": "https://www.pokepedia.fr/images/thumb/5/53/Smogo-RFVF.png/250px-Smogo-RFVF.png",
    "type": "Poison"
  },
  {
    "id": "32b8d082-119c-42a8-a782-269ba9e01836",
    "name": "Pikachu",
    "height": 0.4,
    "weight": 6,
    "picture": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
    "type": "Electric"
  },
  {
    "id": "366a2280-d5ca-4579-932a-322befcd2ce0",
    "name": "Sandshrew",
    "height": 0.6,
    "weight": 12,
    "picture": "https://archives.bulbagarden.net/media/upload/thumb/9/9e/027Sandshrew.png/500px-027Sandshrew.png",
    "type": "Sand"
  },
  {
    "id": "3b64532f-dca8-4a37-b5b1-17728a71717e",
    "name": "Zéroïd",
    "height": 1.2,
    "weight": 55.5,
    "picture": "https://www.pokemontrash.com/pokedex/images/sugimori/793.png",
    "type": "Poison"
  },
  {
    "id": "492b9daf-22d6-4da8-abf8-54bf73f6ccfc",
    "name": "Haunter",
    "height": 1.6,
    "weight": 0.1,
    "picture": "https://www.pokepedia.fr/images/thumb/0/09/Spectrum-RFVF.png/250px-Spectrum-RFVF.png",
    "type": "Ghost"
  },
  {
    "id": "54e14aae-30ee-404e-8c54-3b8f3938ad3d",
    "name": "Bulbasaur",
    "height": 0.7,
    "weight": 6.9,
    "picture": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    "type": "Grass"
  },
  {
    "id": "56ea803e-b287-469f-b0d1-7c45fd609deb",
    "name": "Machop",
    "height": 0.8,
    "weight": 19.5,
    "picture": "https://www.pokepedia.fr/images/thumb/7/75/Machoc-RFVF.png/250px-Machoc-RFVF.png",
    "type": "Fighting"
  },
  {
    "id": "7f1aed95-4814-4e61-80ad-953f52797e53",
    "name": "Mewtwo",
    "height": 2,
    "weight": 122,
    "picture": "https://archives.bulbagarden.net/media/upload/thumb/7/78/150Mewtwo.png/250px-150Mewtwo.png",
    "type": "Psychic"
  },
  {
    "id": "8e39d1b8-12e7-4903-8d04-6252e552497d",
    "name": "Tentacool",
    "height": 0.9,
    "weight": 45.5,
    "picture": "https://www.pokepedia.fr/images/thumb/d/de/Tentacool-RFVF.png/250px-Tentacool-RFVF.png",
    "type": "Water"
  },
  {
    "id": "94fb0abf-63eb-43ed-b5c4-2745eba4f65c",
    "name": "Vulpix",
    "height": 0.6,
    "weight": 9.9,
    "picture": "https://www.pokepedia.fr/images/thumb/f/f6/Goupix-RFVF.png/250px-Goupix-RFVF.png",
    "type": "Fire"
  },
  {
    "id": "951066c7-e500-4d2a-a79a-164356d098f0",
    "name": "Staryu",
    "height": 0.8,
    "weight": 34.5,
    "picture": "https://www.pokepedia.fr/images/thumb/3/34/Stari-RFVF.png/250px-Stari-RFVF.png",
    "type": "Water"
  },
  {
    "id": "95ad13f3-a8b0-4f00-a8e1-109e768b203a",
    "name": "Rattata",
    "height": 0.3,
    "weight": 3.5,
    "picture": "https://www.pokepedia.fr/images/thumb/9/9e/Rattata-RFVF.png/250px-Rattata-RFVF.png",
    "type": "Normal"
  },
  {
    "id": "a798da96-943d-4f97-8e1a-aa42f2294fe3",
    "name": "Diglett",
    "height": 0.2,
    "weight": 0.8,
    "picture": "https://www.pokepedia.fr/images/a/aa/Taupiqueur-RFVF.png",
    "type": "Ground"
  },
  {
    "id": "ab7ca64f-ba65-4a33-8713-9b87e2874555",
    "name": "Mew",
    "height": 0.4,
    "weight": 4,
    "picture": "https://archives.bulbagarden.net/media/upload/thumb/b/b1/151Mew.png/250px-151Mew.png",
    "type": "Psychic"
  },
  {
    "id": "f2da4972-44e3-4813-9954-ba1f50feae8e",
    "name": "Charmender",
    "height": 0.6,
    "weight": 8.5,
    "picture": "https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/250px-Salam%C3%A8che-RFVF.png",
    "type": "Fire"
  },
  {
    "id": "fd43d165-7774-4caa-9d84-6009e072f2ab",
    "name": "Squirtle",
    "height": 0.5,
    "weight": 9,
    "picture": "https://www.pokepedia.fr/images/thumb/c/cc/Carapuce-RFVF.png/250px-Carapuce-RFVF.png",
    "type": "Water"
  }
];

describe('PokemonService', () => {
  let service: PokemonService;
  let authService: AuthService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PokemonService);
    authService = TestBed.inject(AuthService);
  });

  it('#getObservableValue should return value from observable',
    (done: DoneFn) => {
      authService.login('sacha1@pokemon-form.fr', '123456789').subscribe(() => {
        service.getPokemon().subscribe(pokemonList => {
          expect(pokemonList.length).toEqual(mockResponse.length);
          expect(pokemonList).toEqual(mockResponse);
          done();
        });
      });
    });
});
