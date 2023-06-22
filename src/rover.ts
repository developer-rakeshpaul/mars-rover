import { map } from 'ramda';

export interface Rover {
  x: number;
  y: number;
  heading: string;
}

export function explorePlateau(
  upperRight: string,
  position: string,
  instruction: string,
): Rover {
  const [maxX, maxY] = upperRight.split(' ').map(Number);
  const roverPosition = position?.split(' ');

  const rover: Rover = {
    x: Number(roverPosition[0]),
    y: Number(roverPosition[1]),
    heading: roverPosition[2],
  };

  const instructions = instruction.split('');
  map((instruction) => {
    if (instruction === 'L') {
      // Turn left 90 degrees
      switch (rover.heading) {
        case 'N':
          rover.heading = 'W';
          break;
        case 'W':
          rover.heading = 'S';
          break;
        case 'S':
          rover.heading = 'E';
          break;
        case 'E':
          rover.heading = 'N';
          break;
      }
    } else if (instruction === 'R') {
      // Turn right 90 degrees
      switch (rover.heading) {
        case 'N':
          rover.heading = 'E';
          break;
        case 'E':
          rover.heading = 'S';
          break;
        case 'S':
          rover.heading = 'W';
          break;
        case 'W':
          rover.heading = 'N';
          break;
      }
    } else if (instruction === 'M') {
      // Move one grid point based on the current heading
      switch (rover.heading) {
        case 'N':
          if (rover.y < maxY) {
            rover.y += 1;
          }
          break;
        case 'E':
          if (rover.x < maxX) {
            rover.x += 1;
          }
          break;
        case 'S':
          if (rover.y > 0) {
            rover.y -= 1;
          }
          break;
        case 'W':
          if (rover.x > 0) {
            rover.x -= 1;
          }
          break;
      }
    }
  }, instructions);

  return rover;
}

export function roverToString(rover: Rover): string {
  return `${rover.x} ${rover.y} ${rover.heading}`;
}
