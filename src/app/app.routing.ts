import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
	{
		path: '', children: [
			{ path: 'main', loadChildren: './modules/main/main.module' }
		]
	},
	{ path: '', redirectTo: 'main', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);