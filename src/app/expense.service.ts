import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ExpenseData } from './expense-data.model';
import { CategoryData } from './category-data.model';
@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http : HttpClient) { }

  getExpenses():Observable<any>
  {
    return this.http.get<any>(environment.apiUrl+"Expens");
  }

  getCategories():Observable<CategoryData[]>
  {
    return this.http.get<CategoryData[]>(environment.apiUrl+"Categories");
  }

  postExpenses(data : ExpenseData[]):Observable<any>
  {
   return this.http.post(environment.apiUrl+"Expens",data)
  }

  


}
