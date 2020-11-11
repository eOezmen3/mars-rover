import { Rover } from '../rover';
import { commandsLookup } from '../navigator';
describe('Mars rover testing', () => {
  test('Mars rover should land to mars with given parameters ', () => {
    const rover = new Rover(1, 1, 'EAST');
    expect(rover).toBeTruthy();
  });

  test('A rover has a to toString method which returns its coords and direction', () => {
    const rover = new Rover(3, 6, 'WEST');
    expect(rover.getLocationAsString()).toEqual('(3, 6) WEST');
  });

  test('Navigator should be initialized', () => {
    expect(commandsLookup).toBeTruthy();
  });
});
