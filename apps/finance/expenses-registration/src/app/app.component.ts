import { Component } from '@angular/core';
import {ExpensesService} from '@bt-libs/finance/data-access/expenses'
import { inject,OnInit } from '@angular/core';



@Component({
  selector: 'business-tools-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements OnInit{

  ngOnInit(){
    this.t.sayHi();
  }

 t=inject(ExpensesService);
  title = 'finance-expenses-registration';
}
