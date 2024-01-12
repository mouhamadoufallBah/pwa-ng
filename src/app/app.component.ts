import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NgApexchartsModule } from 'ng-apexcharts';

import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";

export type DiagrammeCirculaire = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};

export type Diagramme2 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DataTablesModule, FormsModule, NgApexchartsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<DiagrammeCirculaire>;


  public chartOptions2: Partial<Diagramme2>;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.chartOptions = {
      series: [44, 55],
      chart: {
        width: 300,
        type: "donut"
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient"
      },
      legend: {
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        }
      },

    };

    this.chartOptions2 = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 130]
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chart: {
        height: 165,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }

  toggleMenu: boolean = false;

  link: any;

  dtOptions: DataTables.Settings = {};

  dtOptions2: DataTables.Settings = {};





  ngOnInit(): void {
    this.dtOptions = {
      searching: true,
      lengthChange: false,
      paging: false,
      info: false,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json'
      }
    };

    this.dtOptions2 = {
      searching: true,
      lengthChange: false,
      paging: false,
      info: false,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json'
      }
    };

  }

  onToggleMenu() {
    this.toggleMenu = !this.toggleMenu;

    console.log(this.toggleMenu)
  }

  // toggleFullscreen() {
  //   if (this.isFullscreen()) {
  //     this.exitFullscreen();
  //   } else {
  //     this.enterFullscreen();
  //   }
  // }

  // enterFullscreen() {
  //   const element = this.el.nativeElement;

  //   if (element.requestFullscreen) {
  //     element.requestFullscreen();
  //   } else if (element.mozRequestFullScreen) {
  //     element.mozRequestFullScreen();
  //   } else if (element.webkitRequestFullscreen) {
  //     element.webkitRequestFullscreen();
  //   } else if (element.msRequestFullscreen) {
  //     element.msRequestFullscreen();
  //   }
  // }

  // exitFullscreen() {
  //   const document: any = window.document;

  //   if (document.exitFullscreen) {
  //     document.exitFullscreen();
  //   } else if (document.mozCancelFullScreen) {
  //     document.mozCancelFullScreen();
  //   } else if (document.webkitExitFullscreen) {
  //     document.webkitExitFullscreen();
  //   } else if (document.msExitFullscreen) {
  //     document.msExitFullscreen();
  //   }
  // }

  // isFullscreen() {
  //   const document: any = window.document;
  //   return (
  //     document.fullscreenElement ||
  //     document.mozFullScreenElement ||
  //     document.webkitFullscreenElement ||
  //     document.msFullscreenElement
  //   );
  // }
}
