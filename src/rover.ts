import {
  Move,
  Turn,
  commandsLookup,
  directions,
  Direction,
  turnDirection,
  turnCommands,
} from './navigator';

class Rover {
  private x: number;
  private y: number;
  private direction: Direction;
  constructor(x: number, y: number, direction: Direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  setX(x: number): void {
    this.x = x;
  }
  setY(y: number): void {
    this.y = y;
  }
  setDirection(dir: Direction): void {
    this.direction = dir;
  }
  getLocationAsString(): string {
    return ['(', this.x, ', ', this.y, ') ', this.direction].join('');
  }

  applyMoveCommand(command: Move): boolean {
    const moveRover: number = commandsLookup[this.direction + command];
    this.setX(this.x + moveRover[0]);
    this.setY(this.y + moveRover[1]);
    return true;
  }

  applyTurnCommand(command: Turn): boolean {
    const indexOfNewDir = turnDirection(
      directions.indexOf(this.direction),
      command == turnCommands[0] ? -1 : 1
    );
    this.setDirection(directions[indexOfNewDir]);
    return true;
  }
}

export { Rover, Direction };
