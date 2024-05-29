import { Component, inject } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
	selector: 'app-breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {

	private router = inject(Router);

	public titulo!: string;
	public tituloSubs$!: Subscription;

	constructor() {
		this.getTituloRuta();
	}

	getPipeRuta() {
		return this.router.events
			.pipe(
				filter( (event): event is ActivationEnd => event instanceof ActivationEnd),
				filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
				map( (event: ActivationEnd) => event.snapshot.data )
			)
	}

	getTituloRuta() {
		this.tituloSubs$ = this.getPipeRuta().subscribe( ({titulo}) => {
			document.title = `Admin Pro - ${titulo}`;
			this.titulo = titulo;
		})
	}

	ngOnDestroy(): void {
		//Called once, before the instance is destroyed.
		//Add 'implements OnDestroy' to the class.
		this.tituloSubs$.unsubscribe()
	}

}
