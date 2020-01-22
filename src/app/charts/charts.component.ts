import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExpenseData } from '../expense-data.model';
import { ExpenseService } from '../expense.service';
import { CategoryData } from '../category-data.model';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit,OnDestroy {
  
  rea : Subscription
  constructor(private service:ExpenseService) { }

 pieChartOptions={
   responsive:true
 }

 pieChartLabels=[]

 pieChartColor:any=[
  {
    backgroundColor: [
      "#FF6384",
      "#36A2EB",
      "#FFCE56",
      'rgba(0,255,0,0.3)'
  ],
  hoverBackgroundColor: [
      "#FF6384",
      "#36A2EB",
      "#FFCE56",
      'rgba(0,255,0,0.3)'
  ]
   }
 ]

 pieChartData:any[]=[]


  ngOnInit() {
   this.rea=this.service.getExpenses().subscribe(res=> 
    res.getAmount.map(
     dat=>
     {
       this.pieChartData.push(dat.Totalamt),
       this.pieChartLabels.push(dat.CategoryName)
      }
      )
      )
      //this.service.getExpenses().then(res=> res.getAmount.map(dat=>this.pieChartData.push(dat.Totalamt)))
    }

  ngOnDestroy(){
    this.rea.unsubscribe();
  }

  onChartClick(event) {
    console.log(event);
}
}
