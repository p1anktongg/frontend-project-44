import getRandomInt from "../utils.js";
import runGame from "../index.js";

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
    if (number < 2) {
        return false;
    };

    for (let i = 2; i <= Math.sqrt(number); i += 1) {
        if (number % i === 0) {
            return false;
        };
    };
    return true;
};

const generateQuestion = () => {
    const number = getRandomInt(1, 100);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    return [String(number), correctAnswer];
};

const runPrimeGame = () => runGame(description, generateQuestion);

export default runPrimeGame;
