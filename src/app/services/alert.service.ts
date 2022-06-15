import {Injectable} from '@angular/core';
import {NotifierService} from "angular-notifier";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private notifierService: NotifierService) {
  }

  error(message: string) {
    // triggers a notifier service error type alert
    this.notifierService.notify('error', message);
  }

  info(message: string) {
    // triggers a notifier service info type alert
    this.notifierService.notify('info', message);
  }

  success(message: string) {
    // triggers a notifier service success type alert
    this.notifierService.notify('success', message);
  }
}
