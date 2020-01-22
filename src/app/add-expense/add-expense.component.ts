import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { CategoryData } from '../category-data.model';
import { ExpenseData } from '../expense-data.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {

  constructor(private service:ExpenseService) { }

  catData : CategoryData[];
  expenseData : ExpenseData; 
  arrData : ExpenseData[] = [];
  ngOnInit() {
    this.resetForm();
    
    this.service.getCategories().subscribe(res=>this.catData=res as CategoryData[])
  }

  resetForm(form?:NgForm)
  {
    if(form!=null)
    form.resetForm();
    this.expenseData ={
      EID : null,
      EDate : null,
      CategoryDescription:'',
      Amount : null,
      CatId:0,
      CategoryName: '',
    }
  }

  onAdd(form:NgForm)
  {
   this.arrData.push(form.value);
  this.resetForm();
 }

onDelete(arr)
{
  console.log(arr + "Delete");
}

onSave()
{
  //post method
  this.service.postExpenses(this.arrData).subscribe( 
    result => console.log("success",result),
    error => this.onHttpError(error)
    );
  this.arrData=[];
}

onHttpError(error:any)
{
  console.log()
}

onClear()
{
  this.resetForm();
}

onEdit(i:number,arr : ExpenseData)
{
  console.log(i);
  //this.expenseData = Object.assign({},arr);
}

}
