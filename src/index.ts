#!/usr/bin/env node

import { prompt } from 'enquirer';
import { explorePlateau, roverToString } from './rover';
import kleur from 'kleur';

async function explore() {
  try {
    const { upperRight }: { upperRight: string } = await prompt({
      type: 'input',
      name: 'upperRight',
      message:
        'Please provide positive integers as the upper-right coordinates(x y) of the plateau. ',
      validate: (input: string) => {
        const [x, y] = input.split(' ');
        if (isNaN(Number(x)) || Number(x) < 0) {
          return 'Please enter valid x coordinates';
        }
        if (isNaN(Number(y)) || Number(y) < 0) {
          return 'Please enter valid y coordinates';
        }
        return true;
      },
    });

    const [maxX, maxY] = upperRight.split(' ').map(Number);

    const response: {
      position: string;
      instruction: string;
    } = await prompt([
      {
        type: 'input',
        name: 'position',
        message: 'Enter the rover position(x y heading)',
        validate: (input: string) => {
          const [x, y, heading] = input.split(' ');
          if (isNaN(Number(x)) || Number(x) < 0 || Number(x) > maxX) {
            return 'Please enter valid x coordinates';
          }
          if (isNaN(Number(y)) || Number(y) < 0 || Number(y) > maxY) {
            return 'Please enter valid y coordinates';
          }
          if (['N', 'E', 'S', 'W'].indexOf(heading) === -1) {
            return 'Please enter valid heading (N, E, S, W)';
          }
          return true;
        },
      },
      {
        type: 'input',
        name: 'instruction',
        message: 'Enter the rover instruction(L, R, M)',
        validate: (instruction: string) => {
          if (instruction.match(/[^LRM]/g)) {
            return 'Please enter valid instruction (L, R, M)';
          }
          return true;
        },
      },
    ]);

    const { instruction, position } = response;

    // instantiate
    const result = explorePlateau(upperRight, position, instruction);
    console.log(
      `The lastest position of the rover ${kleur
        .blue()
        .bold()
        .underline(roverToString(result))}`,
    );
    const respone: { repeat: boolean } = await prompt({
      type: 'confirm',
      name: 'repeat',
      message: 'Do you want to do another exploration?',
    });
    if (respone.repeat) {
      explore();
    } else {
      process.exit(0);
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

explore();
