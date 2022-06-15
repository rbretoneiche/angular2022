import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, Observable, of, throwError} from 'rxjs';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AlertService} from "../../../services/alert.service";
import {AlertEnum} from "../../../enums/alert.enum";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,
              private router: Router,
              private laertService: AlertService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(err => {
        if (err.status === 401 || err.status === 403) {
          this.laertService.error(AlertEnum.notAuthorized)
          this.authService.logout();
          return of(err);
        }
        return throwError(err)
      }
    ))
  }
}
