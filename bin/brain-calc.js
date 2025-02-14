#!/usr/bin/env node
import runGame from '../src/engine.js';
runGame();
import { getQuestionAndAnswer, instructions} from '../src/calc.js';
getQuestionAndAnswer();
instructions();
