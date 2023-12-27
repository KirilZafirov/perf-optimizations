import { ChangeDetectorRef, Component, Inject, NgZone, ViewChild } from "@angular/core";

import { Chart, ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
// import { BaseChartDirective, NgChartsModule } from "ng2-charts"; 
// NgChartsModule
@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [],
  templateUrl: './statistics-page.component.html',
  styleUrl: './statistics-page.component.scss',
})
export class StatisticsPageComponent {
 
  #zone = Inject(NgZone);
  #cd = Inject(ChangeDetectorRef);
  chart: any = [];
  
  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
   
}
