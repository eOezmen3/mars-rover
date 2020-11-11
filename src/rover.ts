type Direction = 'NORTH' | 'EAST' | 'SOUTH' | 'WEST';

class Rover {
  private x: number;
  private y: number;
  private direction: Direction;
  constructor(x: number, y: number, direction: Direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  getLocationAsString(): string {
    return ['(', this.x, ', ', this.y, ') ', this.direction].join('');
  }
}

export { Rover, Direction };
