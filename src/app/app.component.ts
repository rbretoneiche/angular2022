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
export class AppComponent implements OnInit {
  userIsLogged$ = new BehaviorSubject<boolean>(false);

  constructor(private authService: AuthService, private router: Router) {
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  ngOnInit(): void {
    this.userIsLogged$ = this.authService.userIsLogged$;
  }
}
