import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { ExpenseData } from '../expense-data.model';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  data : ExpenseData[];
 
  constructor(private service:ExpenseService) { }

  ngOnInit() {
   this.refresh();
  }

  refresh()
  {
    this.service.getExpenses().subscribe(res => this.data = res.getExpenses as ExpenseData[])
  }

}
