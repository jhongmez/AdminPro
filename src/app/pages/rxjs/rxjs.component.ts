import { Component } from '@angular/core';
import { Observable, interval, map, retry, take } from 'rxjs';

@Component({
	selector: 'app-rxjs',
	templateUrl: './rxjs.component.html',
	styleUrl: './rxjs.component.css'
})
export class RxjsComponent {

	constructor() {

		// this.retornaObservable().pipe(
		// 	retry(2)
		// ).subscribe(
		// 	valor => console.log(`Subs: ${valor}`),
		// 	err => console.warn('Error', err),
		// 	() => console.info(`Obs terminado`)
		// );

		this.retornaIntervalo().subscribe(
			(valor) => console.log(valor)
		);

	}

	retornaIntervalo(): Observable<number> {
		return interval(1000)
			.pipe(
				take( 4 ),
				map( valor => valor + 1 )
			)
	}

	retornaObservable(): Observable<number> {
		let i = -1;

		return new Observable<number>( observer => {
			
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

	}

}
