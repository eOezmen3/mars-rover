type Direction = 'NORTH' | 'EAST' | 'SOUTH' | 'WEST';

export class Rover {
  private x: number;
  private y: number;
  private direction: Direction;
  constructor(x: number, y: number, direction: Direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }
}

export { Rover, Direction };
