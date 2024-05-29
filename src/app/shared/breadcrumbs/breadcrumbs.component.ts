import { Component, inject } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
	selector: 'app-breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {

	private router = inject(Router);

	public titulo!: string;

	constructor() {
		this.getArgumentosRuta();
	}

	getArgumentosRuta() {
		this.router.events
			.pipe(
				filter( (event): event is ActivationEnd => event instanceof ActivationEnd),
				filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
				map( (event: ActivationEnd) => event.snapshot.data )
			)
			.subscribe( ({titulo}) => {
				document.title = `Admin Pro - ${titulo}`;
				this.titulo = titulo;
			})
	}

}
