import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CalculatorDataService } from '../shared/calculatordata.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  @Output() getTotal = new EventEmitter;
  productPrice;
  salesPerMonth;
  numYear;


  constructor(private calculatorData: CalculatorDataService) { }

  ngOnInit() {

   }

  calculateTotal() {
    return (this.productPrice * this.salesPerMonth) * (this.numYear * 12);
  }
}
