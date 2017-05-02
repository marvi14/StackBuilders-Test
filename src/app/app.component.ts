import { Component } from '@angular/core';
import { PushNotificationsService } from 'angular2-notifications';
import { Router } from "@angular/router";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})

export class AppComponent {
	constructor(private _push: PushNotificationsService, private router: Router) {
		if (this.router.url === '/')
			this.router.navigate(['/main']);
	}
}
