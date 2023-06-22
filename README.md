# Mars Rover Problem

A squad of robotic rovers are to be landed on a plateau on Mars.
This plateau, which is curiously rectangular, must be navigated by the rovers so that their on board cameras can get a complete view of the surrounding terrain to send back to Earth.

A rover's position is represented by a combination of an x and y coordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.
In order to control a rover, it is sent a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot.
'M' means move forward one grid point, and maintain the same heading. Assume that the square directly North from (x, y) is (x, y+1).

## Input

The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0.
The rest of the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input. The first line gives the rover's position, and the second line is a series of instructions telling the rover how to explore the plateau. The position is made up of two integers and a letter separated by spaces, corresponding to the x and y coordinates and the rover's orientation.
Each rover will be finished sequentially, which means that the second rover won't start to move until the first one has finished moving.

## Output

The output for each rover should be its final coordinates and heading.
Test Input
55
12 N LMLMLMLMM 33 E MMRMMRMRRM
Expected Output
13 N 51 E

>

## Run as docker container

Run the application locally using docker

```sh

docker build -t mars-rover .

docker run --rm -ti mars-rover
```

Or pull the docker image from docker hub

```sh

docker run --rm -ti rakeshpaul/mars-rover

```

## Scripts

### `npm run start:dev`

Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

### `npm run start`

Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/index.js`.

### `npm run build`

Builds the app at `build`, cleaning the folder first.

### `npm run test`

Runs the `jest` tests once.

### `npm run test:dev`

Run the `jest` tests in watch mode, waiting for file changes.

### `npm run prettier-format`

Format your code.

### `npm run prettier-watch`

Format your code in watch mode, waiting for file changes.

### `npm run test:coverage`

For getting the code coverage
