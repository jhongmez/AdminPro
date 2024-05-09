import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component {
	// Doughnut
	public labels1: string[] = [
		'Pan',
		'Tacos',
		'gaseosa',
	];

	public data1: ChartData<'doughnut'> = {
		labels: this.labels1, datasets: [
			{ data: [10, 15, 40] },
		],
	};
}
