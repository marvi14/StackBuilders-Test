import { Component } from '@angular/core';
import { PushNotificationsService } from 'angular2-notifications';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})

export class AppComponent {
	constructor(private _push: PushNotificationsService) {
	}
}
