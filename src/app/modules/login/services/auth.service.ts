import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {BehaviorSubject, map, Observable, take} from "rxjs";
import {Router} from "@angular/router";

export interface AuthInterface {
  data: {
    access_token: string
    expires: number
    refresh_token: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userIsLogged$ = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient, private router: Router
  ) {
    this.userIsLogged$.next(!!this.authToken.length)
  }

  get authToken(): string {
    return localStorage.getItem('pokemon-token') || '';
  }

  login(email: string, password: string): Observable<AuthInterface | null> {
    if (!email || !password) {
      throw Error('Incorrect call');
    }

    return this.httpClient.post(`${environment.apiUrl}/auth/login`, {
      "email": email,
      "password": password
    }).pipe(take(1))
      .pipe(map((result) => {
        const authData = result as AuthInterface;
        if (authData.data.access_token) {
          localStorage.setItem('pokemon-token', authData.data.access_token);
          this.userIsLogged$.next(!!this.authToken.length)
          return authData;
        }
        return null;
      }));
  }

  logout() {
    localStorage.clear();
    this.userIsLogged$.next(!!this.authToken.length)
    this.router.navigateByUrl(`/login`);
  }
}
