import { Component, Inject, NgZone, OnInit } from "@angular/core";

import Chart from 'chart.js/auto';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [],
  templateUrl: './statistics-page.component.html',
  styleUrl: './statistics-page.component.scss',
})
export class StatisticsPageComponent implements OnInit {
 
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
