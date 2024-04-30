import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';



@NgModule({
	declarations: [
		PagesComponent,
		ProgressComponent,
		Grafica1Component,
		DashboardComponent,
	],
	exports: [
		PagesComponent,
		ProgressComponent,
		Grafica1Component,
		DashboardComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		SharedModule
	]
})
export class PagesModule { }
