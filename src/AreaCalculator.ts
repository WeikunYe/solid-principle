import { Shape } from './Shapes';

export class AreaCalculator {
  protected shapes: Shape[];
  constructor(shapes: Shape[]) {
    this.shapes = shapes;
  }
  sum() {
    const areas: number[] = [];
    this.shapes.forEach((shape) => areas.push(shape.area()));
    return areas.reduce((a, b) => a + b, 0);
  }
}