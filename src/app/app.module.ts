import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';

@NgModule({
	declarations: [
		AppComponent,
		NotpagefoundComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		PagesModule,
		AuthModule
	],
	bootstrap: [AppComponent],
	providers: [provideCharts(withDefaultRegisterables())],
})
export class AppModule { }
