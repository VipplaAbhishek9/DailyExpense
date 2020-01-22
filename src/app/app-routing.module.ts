import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ExpenseComponent } from './expense/expense.component';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
  {path:'List',component:ExpenseComponent},
  {path:'Add',component:AddExpenseComponent},
  {path:'Charts',component:ChartsComponent},
  {path:'',redirectTo:'/List',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
