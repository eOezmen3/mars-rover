import { Rover, Direction } from '../rover';

describe('Mars rover testing', () => {
  test('Mars rover should land to mars with given parameters ', () => {
    const rover = new Rover(1, 1, 'EAST');
    expect(rover).toBeTruthy();
  });

  test('The rover has a to toString method which returns its coords and direction', () => {
    const rover = new Rover(3, 6, 'WEST');
    expect(rover.locationAsString()).toEqual('(3, 6) WEST');
  });
});
