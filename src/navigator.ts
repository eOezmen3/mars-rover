type Direction = 'NORTH' | 'EAST' | 'SOUTH' | 'WEST';
type Move = 'F' | 'B';
type Turn = 'L' | 'R';

const commandsLookup = {
  NORTHF: [0, 1],
  NORTHB: [0, -1],
  EASTF: [1, 0],
  EASTB: [-1, 0],
  SOUTHF: [0, -1],
  SOUTHB: [0, 1],
  WESTF: [-1, 0],
  WESTB: [1, 0],
};

export { commandsLookup, Direction, Move, Turn };
