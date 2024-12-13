import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor() { }

  sayHi(){
    console.log('Hi this is me ');
  }
}
