import { BarChartComponent } from './bar-chart.component';


export const routes = [
  { path: '', children: [
    { path: '', component: BarChartComponent },
    { path: 'pa',  children: [
     // { path: '' ,   component : PaComponent }
    ]}
  ]},
];