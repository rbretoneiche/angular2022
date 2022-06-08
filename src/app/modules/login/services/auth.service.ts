import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {map, Observable, take} from "rxjs";

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

  constructor(private httpClient: HttpClient) {
  }

  get authToken(): string {
    return localStorage.getItem('pokemon-token') || '';
  }

  login(email: string, password: string): Observable<AuthInterface> {
    if (!email || !password) {
      throw Error('Incorrect call');
    }

    return this.httpClient.post(`${environment.apiUrl}/auth/login`, {
      "email": email,
      "password": password
    }).pipe(take(1))
      .pipe(map((result) => {
        const authData = result as AuthInterface;
        localStorage.setItem('pokemon-token', authData.data.access_token);
        return authData;
      }));
  }

  logout() {
    localStorage.clear()
  }
}
