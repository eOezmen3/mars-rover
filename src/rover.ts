import { Move, Turn, commandsLookup } from './navigator';

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

  applyMoveCommand(command: Turn | Move): boolean {
    const moveRover: number = commandsLookup[this.direction + command];
    this.x += moveRover[0];
    this.y += moveRover[1];
    return true;
  }
}

export { Rover, Direction };
