import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
	selector: 'app-dona',
	templateUrl: './dona.component.html',
	styleUrl: './dona.component.css'
})
export class DonaComponent {

	@Input() title: string = 'Sin titulo';

	// Doughnut
	@Input('label') doughnutChartLabels: string[] = [
		'Label1',
		'Label2',
		'Mail-Order Sales',
	];

	@Input('data') doughnutChartData: ChartData<'doughnut'> = {
		labels: this.doughnutChartLabels,
		datasets: [
			{ data: [350, 450, 100] },
		],
	};

	public doughnutChartType: ChartType = 'doughnut';
	
	// events
	public chartClicked({
	event,
	active,
	}: {
		event: ChartEvent;
		active: object[];
	}): void {
		console.log(event, active);
	}

	public chartHovered({
	event,
	active,
	}: {
		event: ChartEvent;
		active: object[];
	}): void {
		console.log(event, active);
	}
}
