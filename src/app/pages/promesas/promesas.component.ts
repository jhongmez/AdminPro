import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-promesas',
	templateUrl: './promesas.component.html',
	styleUrl: './promesas.component.css'
})
export class PromesasComponent implements OnInit {
	
	
	ngOnInit(): void {

		// const promesa = new Promise( () => {
		// 	console.log('Holis');
		// });

		this.getUsuarios().then( (response) => {
			console.log(response);
		})
		
	}

	getUsuarios() {

		return new Promise( (resolve) => {
			fetch('https://reqres.in/api/users')
				.then( (resp) => resp.json() )
				.then( body => resolve(body.data) )

		})

	}


}
