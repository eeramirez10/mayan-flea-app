import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { MayanFleaService } from '../../mayan-flea.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    series: [{
      name: "Venta",
      colorByPoint: true,
      data: [{
        name: "Chrome",
        y: 62.74,
        drilldown: "Chrome"
      },
        {
          name: "Firefox",
          y: 10.57,
          drilldown: "Firefox"
        },
        {
          name: "Internet Explorer",
          y: 7.23,
          drilldown: "Internet Explorer"
        },
        {
          name: "Safari",
          y: 5.58,
          drilldown: "Safari"
        },
        {
          name: "Edge",
          y: 4.02,
          drilldown: "Edge"
        },
        {
          name: "Opera",
          y: 1.92,
          drilldown: "Opera"
        },
        {
          name: "Other",
          y: 7.62,
          drilldown: null
        }],
      type: 'column'
    }],
    title: {
      text: ''
    },
    xAxis: {
      type: 'category'
    },
    lang: {
      drillUpText: '< Regresar'
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '${point.y:,.0f}'
        }
      }
    }

  };

  date: Date = new Date()

  constructor(private mfs:MayanFleaService){ }

  ngOnInit() {

    this.mfs.getDataGraphic(this.date.getDate(), this.date.getMonth() + 1, this.date.getFullYear() ).subscribe( data =>{
      
      this.chartOptions.series[0]['data']= data;
      Highcharts.chart('container', this.chartOptions) 
    })

    
  }



}
