import { Rover, Direction } from '../rover';

describe('Mars rover testing', () => {
  test('Mars rover should land to mars with given parameters ', () => {
    const rover = new Rover(1, 1, 'EAST');
    expect(rover).toBeTruthy();
  });
});
