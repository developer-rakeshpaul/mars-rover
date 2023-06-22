import { roverToString, explorePlateau } from '../src/rover';

describe('explorePlateau', () => {
  test('should return the correct rover position after following instructions', () => {
    const upperRight = '5 5';
    const position = '1 2 N';
    const instruction = 'LMLMLMLMM';
    const expectedOutput = '1 3 N';

    expect(
      roverToString(explorePlateau(upperRight, position, instruction)),
    ).toBe(expectedOutput);
  });

  test('should return the correct rover position after following instructions', () => {
    const upperRight = '5 5';
    const position = '3 3 E';
    const instruction = 'MMRMMRMRRM';
    const expectedOutput = '5 1 E';

    expect(
      roverToString(explorePlateau(upperRight, position, instruction)),
    ).toBe(expectedOutput);
  });

  test('should handle upperRight with single-digit values', () => {
    const upperRight = '3 3';
    const position = '2 2 N';
    const instruction = 'RMM';
    const expectedOutput = '3 2 E';

    expect(
      roverToString(explorePlateau(upperRight, position, instruction)),
    ).toBe(expectedOutput);
  });

  test('should handle upperRight with negative values', () => {
    const upperRight = '5 5';
    const position = '5 2 W';
    const instruction = 'MMRMMRMM';
    const expectedOutput = '5 4 E';

    expect(
      roverToString(explorePlateau(upperRight, position, instruction)),
    ).toBe(expectedOutput);
  });
});
