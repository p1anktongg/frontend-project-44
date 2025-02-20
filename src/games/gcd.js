import getRandomInteger from '../utils.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const generateQuestion = () => {
  const firstNumber = getRandomInteger(1, 100);
  const secondNumber = getRandomInteger(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(gcd(firstNumber, secondNumber));
  return [question, correctAnswer];
};

const runGcdGame = () => runGame(description, generateQuestion);

export default runGcdGame;
