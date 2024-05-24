import { Component } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Component({
	selector: 'app-rxjs',
	templateUrl: './rxjs.component.html',
	styleUrl: './rxjs.component.css'
})
export class RxjsComponent {

	constructor() {

		let i = -1;

		const obs$ = new Observable( observer => {
			
			const intervalo = setInterval( () => {

				i++;
				observer.next(i);

				if ( i === 4 ) {
					clearInterval(intervalo)
					observer.complete()
				}

				if ( i === 2 ) {
					console.log('i === 2') 
					observer.error('PELIGROOOOOO')
				}

			}, 1000)

		});

		obs$.pipe(
			retry(2)
		).subscribe(
			valor => console.log(`Subs: ${valor}`),
			err => console.warn('Error', err),
			() => console.info(`Obs terminado`)
		);

	}

}
