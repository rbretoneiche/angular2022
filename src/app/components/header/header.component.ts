import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {AuthService} from "../../modules/login/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userIsLogged$ = new BehaviorSubject<boolean>(false);
  isCollapsed = true
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
