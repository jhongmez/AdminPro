import { Component, OnInit, inject } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
	selector: 'app-account-settings',
	templateUrl: './account-settings.component.html',
	styleUrl: './account-settings.component.css'
})
export class AccountSettingsComponent implements OnInit {
	
	private settingsService = inject( SettingsService );

	ngOnInit(): void {
		this.settingsService.checkCurrentTheme();
	}
	
	changeTheme( theme: string) {

		this.settingsService.changeTheme( theme )

	}


	

}
