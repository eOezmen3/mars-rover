import { Rover } from '../rover';
import { commandsLookup, Move, Turn } from '../navigator';

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

  describe('Turn and move single commands should return correct values', () => {
    test('Rover should apply the command F to move forward ', () => {
      const rover = new Rover(1, 1, 'EAST');
      expect(rover.applyMoveCommand('F')).toEqual([2, 1]);
    });

    test('Rover should apply the command B to move backwards ', () => {
      const rover = new Rover(1, 0, 'NORTH');
      expect(rover.applyMoveCommand('B')).toEqual([1, -1]);
    });

    test('Rover should apply the command L to to turn left ', () => {
      const rover = new Rover(1, 0, 'NORTH');
      expect(rover.applyTurnCommand('L')).toEqual('WEST');
    });

    test('Rover should apply the command R to to turn left ', () => {
      const rover = new Rover(7, 8, 'EAST');
      expect(rover.applyTurnCommand('R')).toEqual('SOUTH');
    });
  });

  describe(
    'Turn and move single commands update the coordinates' +
      'and direction of the rover correctly',
    () => {
      test('Rover should apply the command F to move forward ', () => {
        const rover = new Rover(1, 1, 'EAST');
        rover.applySingleCommand('F');
        expect(rover.getLocationAsString()).toEqual('(2, 1) EAST');
      });

      test('Rover should apply the command B to move backwards ', () => {
        const rover = new Rover(1, 0, 'NORTH');
        rover.applySingleCommand('B');
        expect(rover.getLocationAsString()).toEqual('(1, -1) NORTH');
      });

      test('Rover should apply the command L to to turn left ', () => {
        const rover = new Rover(1, 0, 'NORTH');
        rover.applySingleCommand('L');
        expect(rover.getLocationAsString()).toEqual('(1, 0) WEST');
      });

      test('Rover should apply the command R to to turn left ', () => {
        const rover = new Rover(7, 8, 'EAST');
        rover.applySingleCommand('R');
        expect(rover.getLocationAsString()).toEqual('(7, 8) SOUTH');
      });
    }
  );

  describe('Apply a sequence of commands correctly', () => {
    test('Rover should apply the command F to move forward ', () => {
      const r = new Rover(4, 2, 'EAST');
      r.applyCommands('FLFFFRFLB');
      expect(r.getLocationAsString()).toEqual('(6, 4) NORTH');
    });
  });

  describe('rover stoppes before obstacle', () => {
    test(
      'Rover should stop before obstacles are encountered and' +
        'provide appropiate location message',
      () => {
        const r = new Rover(1, 3, 'EAST');
        r.setObstacles([
          [2, 3],
          [4, 2],
          [7, 4],
        ]);
        r.applyCommands('FLB');
        expect(r.getLocationAsString()).toEqual('(1, 3) EAST STOPPED');
      }
    );

    test(
      'Rover should stop before obstacles are encountered and' +
        'provide appropiate location message',
      () => {
        const r = new Rover(4, 2, 'EAST');
        r.setObstacles([
          [1, 4],
          [3, 5],
          [7, 4],
        ]);
        r.applyCommands('LFFFLF');
        expect(r.getLocationAsString()).toEqual('(4, 5) WEST STOPPED');
      }
    );
  });
});
