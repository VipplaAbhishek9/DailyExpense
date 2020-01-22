import { BrowserModule, } from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
     
import {AccordionModule} from 'primeng/accordion'; 
import {TabMenuModule} from 'primeng/tabmenu';
import {ChartsModule} from 'ng2-charts';

import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseComponent } from './expense/expense.component';
import { HttpClientModule } from '@angular/common/http';
import { ExpenseService } from './expense.service';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ChartsComponent } from './charts/charts.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
 

@NgModule({
  declarations: [
    AppComponent,
    ExpenseComponent,
    AddExpenseComponent,
    ChartsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,TabMenuModule,ChartsModule,
    ReactiveFormsModule,FormsModule,
    ButtonsModule.forRoot(),
    AppRoutingModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
