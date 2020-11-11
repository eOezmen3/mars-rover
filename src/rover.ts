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
  private obstacles: number[][];
  private obstacleStop: boolean;
  constructor(x: number, y: number, direction: Direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.obstacles = [];
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
  setObstacles(obstacles: number[][]) {
    this.obstacles = obstacles;
  }
  getLocationAsString(): string {
    if (this.obstacleStop) {
      return ['(', this.x, ', ', this.y, ') ', this.direction, ' STOPPED'].join(
        ''
      );
    }
    return ['(', this.x, ', ', this.y, ') ', this.direction].join('');
  }

  applyCommands(commands: string): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    Array.from(commands).every((c) => this.applySingleCommand(c));
  }

  applySingleCommand(command: Move | Turn): boolean {
    if (command === 'L' || command === 'R') {
      this.setDirection(this.applyTurnCommand(command));
    } else {
      const move = this.applyMoveCommand(command);
      if (this.areObstaclesEncountered(move)) return;
      this.setX(move[0]);
      this.setY(move[1]);
    }
    return true;
  }

  applyMoveCommand(command: Move): [number, number] {
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

  areObstaclesEncountered(nextMove: [number, number]): boolean {
    // console.log(nextMove);

    this.obstacleStop = false;
    if (
      this.obstacles.some((i) => i[0] == nextMove[0] && i[1] == nextMove[1])
    ) {
      this.obstacleStop = true;
      return this.obstacleStop;
    }
  }
}

export { Rover, Direction };
