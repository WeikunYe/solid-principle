import { Shape } from './Shapes';
import { AreaCalculator } from './AreaCalculator';

export class PerimeterCalculator extends AreaCalculator {
  constructor(shapes: Shape[]) {
    super(shapes);
  }
  sum() {
    const perimeter: number[] = [];
    this.shapes.forEach((shape) => perimeter.push(shape.perimeter()));
    return perimeter.reduce((a, b) => a + b, 0)
  }
}