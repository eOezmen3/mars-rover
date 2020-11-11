import { Rover } from '../rover';
import { commandsLookup, Move } from '../navigator';

describe('Mars rover testing', () => {
  describe('Mars rover and its utilizer should be created correctly', () => {
    test('Mars rover should land to mars with given parameters ', () => {
      const rover = new Rover(1, 1, 'EAST');
      expect(rover).toBeTruthy();
    });

    test('A rover has a to toString method which returns its coords and direction', () => {
      const rover = new Rover(3, 6, 'WEST');
      expect(rover.getLocationAsString()).toEqual('(3, 6) WEST');
    });

    test('Navigator file should contain the lookup table for commands', () => {
      expect(commandsLookup).toBeTruthy();
    });
  });

  describe('Mars rover and its utilizer should be created correctly', () => {
    test('Rover should apply the command F to move forward ', () => {
      const rover = new Rover(1, 1, 'EAST');
      rover.applyMoveCommand('F');
      expect(rover.getLocationAsString()).toEqual('(2, 1) EAST');
    });
    test('Rover should apply the command B to move backwards ', () => {
      const rover = new Rover(1, 0, 'NORTH');
      rover.applyMoveCommand('B');
      expect(rover.getLocationAsString()).toEqual('(1, -1) NORTH');
    });

    test('Rover should apply the command L to to turn left ', () => {
      const rover = new Rover(1, 0, 'NORTH');
      rover.applyTurnCommand('L');
      expect(rover.getLocationAsString()).toEqual('(1, 0) WEST');
    });

    test('Rover should apply the command R to to turn left ', () => {
      const rover = new Rover(7, 8, 'EAST');
      rover.applyTurnCommand('R');
      expect(rover.getLocationAsString()).toEqual('(7, 8) SOUTH');
    });
  });
});
