import getRandomInt from '../utils.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  };
  return progression;
};

const generateQuestion = () => {
    const progressionLength = getRandomInt(5,10); // длина прогрессии
    const start = getRandomInt(1, 50); // первое число на рандом
    const step = getRandomInt(1,10) // шаг на рандом
    const progression = generateProgression(start, step, progressionLength);
    
    const hiddenIndex = getRandomInt(0, progressionLength - 1); // Убедимся, что индекс в пределах массива
    const correctAnswer = String(progression[hiddenIndex]);
    progression[hiddenIndex] = '..';

    const question = progression.join(' '); // преобразуем массив в строку

  return [question, correctAnswer];
};

    
const runProgressionGame = () => runGame(description, generateQuestion);

export default runProgressionGame;