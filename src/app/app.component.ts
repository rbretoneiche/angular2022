import {Component, OnInit} from '@angular/core';
import {PokemonService} from "./modules/pokemon/services/pokemon.service";
import {AuthService} from "./modules/login/services/auth.service";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


}
