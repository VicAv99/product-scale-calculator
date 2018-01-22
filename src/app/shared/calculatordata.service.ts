import { Injectable } from '@angular/core';
import { ProductPrice } from './product-price.model'

@Injectable()
export class CalculatorDataService {
  constructor() {}

    productPrices = [
      {"value": 50},
      {"value": 75},
      {"value": 100},
      {"value": 200},
      {"value": 300},
      {"value": 400},
      {"value": 500}
    ];

    numberOfSales = [
      {"value": 5},
      {"value": 10},
      {"value": 15},
      {"value": 30},
      {"value": 50},
      {"value": 75},
      {"value": 100},
      {"value": 150},
      {"value": 200}
    ];

    numYears = [
      {"value": 1},
      {"value": 2},
      {"value": 3},
      {"value": 4},
      {"value": 5},
      {"value": 6},
      {"value": 7},
      {"value": 8},
      {"value": 9},
      {"value": 10}
    ];

}
