#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var enquirer_1 = require("enquirer");
var rover_1 = require("./rover");
var kleur_1 = __importDefault(require("kleur"));
function explore() {
    return __awaiter(this, void 0, void 0, function () {
        var upperRight, _a, maxX_1, maxY_1, response, instruction, position, result, respone, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, (0, enquirer_1.prompt)({
                            type: 'input',
                            name: 'upperRight',
                            message: 'Please provide positive integers as the upper-right coordinates(x y) of the plateau. ',
                            validate: function (input) {
                                var _a = input.split(' '), x = _a[0], y = _a[1];
                                if (isNaN(Number(x)) || Number(x) < 0) {
                                    return 'Please enter valid x coordinates';
                                }
                                if (isNaN(Number(y)) || Number(y) < 0) {
                                    return 'Please enter valid y coordinates';
                                }
                                return true;
                            },
                        })];
                case 1:
                    upperRight = (_b.sent()).upperRight;
                    _a = upperRight.split(' ').map(Number), maxX_1 = _a[0], maxY_1 = _a[1];
                    return [4 /*yield*/, (0, enquirer_1.prompt)([
                            {
                                type: 'input',
                                name: 'position',
                                message: 'Enter the rover position(x y heading)',
                                validate: function (input) {
                                    var _a = input.split(' '), x = _a[0], y = _a[1], heading = _a[2];
                                    if (isNaN(Number(x)) || Number(x) < 0 || Number(x) > maxX_1) {
                                        return 'Please enter valid x coordinates';
                                    }
                                    if (isNaN(Number(y)) || Number(y) < 0 || Number(y) > maxY_1) {
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
                                validate: function (instruction) {
                                    if (instruction.match(/[^LRM]/g)) {
                                        return 'Please enter valid instruction (L, R, M)';
                                    }
                                    return true;
                                },
                            },
                        ])];
                case 2:
                    response = _b.sent();
                    instruction = response.instruction, position = response.position;
                    result = (0, rover_1.explorePlateau)(upperRight, position, instruction);
                    console.log("The lastest position of the rover ".concat(kleur_1.default
                        .blue()
                        .bold()
                        .underline((0, rover_1.roverToString)(result))));
                    return [4 /*yield*/, (0, enquirer_1.prompt)({
                            type: 'confirm',
                            name: 'repeat',
                            message: 'Do you want to do another exploration?',
                        })];
                case 3:
                    respone = _b.sent();
                    if (respone.repeat) {
                        explore();
                    }
                    else {
                        process.exit(0);
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _b.sent();
                    console.error(error_1);
                    process.exit(1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
explore();
