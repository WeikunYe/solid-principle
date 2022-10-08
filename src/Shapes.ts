export interface Shape {
  area(): number;
  perimeter(): number;
}

export interface ThreeDimensionalShap {
  volum(): number;
}

export class Square implements Shape {
  private length: number;
  constructor(length: number) {
    this.length = length;
  }
  area(): number {
    return Math.pow(this.length, 2);
  }
  perimeter(): number {
    return this.length * 4;
  }
}

export class Circle implements Shape {
  private radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
  perimeter(): number {
    return Math.PI * this.radius * 2;
  }
}

export class Cuboid implements Shape, ThreeDimensionalShap {
  private length: number;
  constructor(length: number) {
    this.length = length;
  }
  area(): number {
    return Math.pow(this.length, 2) * 6;
  }
  perimeter(): number {
    return this.length * 12;
  }
  volum(): number {
    return Math.pow(this.length, 3);
  }
} 