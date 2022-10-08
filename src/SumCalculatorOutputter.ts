import { AreaCalculator } from './AreaCalculator';

export class SumCalculatorOutputter {
  private calculator: AreaCalculator;
  constructor(calculator: AreaCalculator) {
    this.calculator = calculator;
  }
  JSON() {
    return JSON.stringify(
      {
        sum: this.calculator.sum(),
      }
    );
  }
}