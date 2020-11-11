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

  applyCommands(commands: string): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    [...commands].every((c) => this.applySingleCommand(c));
  }

  applySingleCommand(command: Move | Turn): boolean {
    if (command === 'L' || command === 'R') {
      this.setDirection(this.applyTurnCommand(command));
    } else {
      const move = this.applyMoveCommand(command);
      this.setX(move[0]);
      this.setY(move[1]);
    }
    return true;
  }

  applyMoveCommand(command: Move): number[] {
    const moveRover: number = commandsLookup[this.direction + command];

    return [this.x + moveRover[0], this.y + moveRover[1]];
  }

  applyTurnCommand(command: Turn): Direction {
    const indexOfNewDir = turnDirection(
      directions.indexOf(this.direction),
      command == turnCommands[0] ? -1 : 1
    );
    return directions[indexOfNewDir];
  }
}

export { Rover, Direction };
