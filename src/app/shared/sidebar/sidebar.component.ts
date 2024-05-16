import { Component, OnInit, inject } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
	
	private sidebarService = inject( SidebarService )

	menuItems!: any[];

	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		this.menuItems = this.sidebarService.menu;
		console.log(this.menuItems);
	}
}
