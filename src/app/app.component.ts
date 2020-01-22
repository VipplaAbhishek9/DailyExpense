import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DailyExpenses';
  items : MenuItem[];
  
  ngOnInit()
  {
    console.log("hi")
  this.items = [
    {label :'List',icon:'fa fa-fw fa-calendar',routerLink:'/List'},
    {label :'Add',icon:'fa fa-fw fa-book',routerLink:'/Add'},
    {label :'Charts',icon:'fa fa-area-chart',routerLink:'/Charts'} 
  ]}
}
