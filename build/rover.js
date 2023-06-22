"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roverToString = exports.explorePlateau = void 0;
var ramda_1 = require("ramda");
function explorePlateau(upperRight, position, instruction) {
    var _a = upperRight.split(' ').map(Number), maxX = _a[0], maxY = _a[1];
    var roverPosition = position === null || position === void 0 ? void 0 : position.split(' ');
    var rover = {
        x: Number(roverPosition[0]),
        y: Number(roverPosition[1]),
        heading: roverPosition[2],
    };
    var instructions = instruction.split('');
    (0, ramda_1.map)(function (instruction) {
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
        }
        else if (instruction === 'R') {
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
        }
        else if (instruction === 'M') {
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
exports.explorePlateau = explorePlateau;
function roverToString(rover) {
    return "".concat(rover.x, " ").concat(rover.y, " ").concat(rover.heading);
}
exports.roverToString = roverToString;
