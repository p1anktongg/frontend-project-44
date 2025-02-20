import getRandomInteger from '../utils.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateQuestion = () => {
  const progressionLength = getRandomInteger(5, 10);
  const start = getRandomInteger(1, 50);
  const step = getRandomInteger(1, 10);
  const progression = generateProgression(start, step, progressionLength);
  const hiddenIndex = getRandomInteger(0, progressionLength - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgressionGame = () => runGame(description, generateQuestion);

export default runProgressionGame;
