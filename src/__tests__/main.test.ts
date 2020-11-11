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
    test('Rover should apply command the move forward ', () => {
      const rover = new Rover(1, 1, 'EAST');
      rover.applyMoveCommand('F');
      expect(rover.getLocationAsString()).toEqual('(2, 1) EAST');
    });
  });
});
