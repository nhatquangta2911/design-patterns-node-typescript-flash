import { ITaxCalculator } from '../interfaces/taxCalculator';

export class TaxCalculator2020 implements ITaxCalculator {
  calculateTax(): number {
    return 2020;
  }
}

export class TaxCalculator2019 implements ITaxCalculator {
  calculateTax(): number {
    return 2019;
  }
}
