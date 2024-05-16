import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
	declarations: [
		BreadcrumbsComponent,
		HeaderComponent,
		FooterComponent,
		SidebarComponent,
	],
	exports: [
		BreadcrumbsComponent,
		HeaderComponent,
		FooterComponent,
		SidebarComponent,
	],
	imports: [
		CommonModule,
		RouterModule
	]
})
export class SharedModule { }
