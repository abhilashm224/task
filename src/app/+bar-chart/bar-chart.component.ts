import { Component, OnInit } from '@angular/core';
import { BarChartService } from './bar-chart.service'
import { LoaderService } from '../shared/shared.service';

declare let d3: any;

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  private options;
  private data;

  constructor(
    private BarChartService : BarChartService,
    private LoaderService : LoaderService
  ) { }

  ngOnInit() {

     this.data = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label" : "A" ,
            "value" : -29.765957771107
          } ,
          {
            "label" : "B" ,
            "value" : 0
          } ,
          {
            "label" : "C" ,
            "value" : 32.807804682612
          } ,
          {
            "label" : "D" ,
            "value" : 196.45946739256
          } ,
          {
            "label" : "E" ,
            "value" : 0.19434030906893
          } ,
          {
            "label" : "F" ,
            "value" : -98.079782601442
          } ,
          {
            "label" : "G" ,
            "value" : -13.925743130903
          } ,
          {
            "label" : "H" ,
            "value" : -5.1387322875705
          }
        ]
      }
    ];

    this.drawChart();
  }
 drawChart() {
       this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -10
        }
      }
    }
 }
 	getBarChartInfo() {

		this.LoaderService.loading(true);
		this.BarChartService.getBarChartInfo()
			.subscribe(result => {
				this.LoaderService.loading(false);
				if(result.errors[0].errorcode) {
          
				} else {
					let output = result.data;				
				}
				(error:any) => alert('Service Failed')
			});

		}
}
